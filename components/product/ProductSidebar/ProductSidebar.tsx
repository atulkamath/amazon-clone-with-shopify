import s from './ProductSidebar.module.css'
import { useAddItem } from '@framework/cart'
import { FC, useEffect, useState } from 'react'
import { ProductOptions } from '@components/product'
import type { Product } from '@commerce/types/product'
import { Button, Text, Rating, Collapse, useUI } from '@components/ui'
import moment from 'moment'
import {
  getProductVariant,
  selectDefaultOptionFromProduct,
  SelectedOptions,
} from '../helpers'

interface ProductSidebarProps {
  product: Product
  className?: string
}

const ProductSidebar: FC<ProductSidebarProps> = ({ product, className }) => {
  const addItem = useAddItem()
  const { openSidebar } = useUI()
  const [loading, setLoading] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [product])

  const variant = getProductVariant(product, selectedOptions)
  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
      })
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  let day = moment().add(1, 'days').format('dddd')
  let date = moment().add(1, 'days').date()
  let month = moment().format('MMM')

  return (
    <div className={className}>
      <div className="hidden mb-2 -ml-2 text-2xl font-medium lg:flex">
        {product.name}
      </div>
      <ProductOptions
        options={product.options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <div className="flex p-4 font-medium lg:mt-4 ">
        Price:
        <div className="flex flex-col ml-2 text-lg whitespace-nowrap text-red">
          <span>
            {product.price.currencyCode}
            &nbsp;
            {product.price.value}
          </span>
          <span className="text-sm text-black">All prices exclude VAT.</span>
        </div>
      </div>
      <div className="px-4 space-x-4 text-amazon-link">
        Free delivery:
        <span className="font-bold text-black">
          {day + ', ' + month + '. ' + date}
        </span>
      </div>
      <div className="flex-row items-start hidden w-full -ml-2 space-x-2 border-b lg:flex">
        <Rating value={4} />
        <div className="text-amazon-link">36 reviews</div>
      </div>

      <div className="w-full p-3">
        {process.env.COMMERCE_CART_ENABLED && (
          <Button
            aria-label="Add to Cart"
            type="button"
            className={s.button}
            onClick={addToCart}
            loading={loading}
            disabled={variant?.availableForSale === false}
          >
            {variant?.availableForSale === false
              ? 'Not Available'
              : 'Add To Cart'}
          </Button>
        )}
        <div className="w-screen p-4 mt-4 -ml-4 border-t">
          <h2 className="font-medium uppercase">About this item</h2>
          <Text
            className="mt-2"
            html={product.descriptionHtml || product.description}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductSidebar
