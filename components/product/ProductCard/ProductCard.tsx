import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import type { Product } from '@commerce/types/product'
import s from './ProductCard.module.css'
import Image, { ImageProps } from 'next/image'
import WishlistButton from '@components/wishlist/WishlistButton'
import usePrice from '@framework/product/use-price'
import ProductTag from '../ProductTag'
import { Rating } from '@components/ui'

interface Props {
  className?: string
  product: Product
  noNameTag?: boolean
  imgProps?: Omit<ImageProps, 'src' | 'layout' | 'placeholder' | 'blurDataURL'>
  variant?: 'default' | 'slim' | 'simple' | 'category'
  title?: string
  no?: number
}

const placeholderImg = '/product-img-placeholder.svg'

const ProductCard: FC<Props> = ({
  product,
  imgProps,
  className,
  noNameTag = false,
  variant = 'default',
  title,
  no,
}) => {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  const rootClassName = cn(
    s.root,
    {
      [s.slim]: variant === 'slim',
      [s.simple]: variant === 'simple',
      [s.category]: variant === 'category',
    },
    className,
    no === 0 ? '-ml-4' : null
  )

  return (
    <Link href={`/product/${product.slug}`}>
      <a className={rootClassName}>
        {variant === 'slim' && (
          <>
            <div className={s.header}>
              {/* <h1 className="text-2xl">{title}</h1>
              <span>{product.name}</span> */}
            </div>

            {product?.images && (
              <div>
                <Image
                  quality="85"
                  src={product.images[0]?.url || placeholderImg}
                  alt={product.name || 'Product Image'}
                  height={150}
                  width={150}
                  layout="fixed"
                  objectFit="contain"
                  {...imgProps}
                />
              </div>
            )}
            <h2 className="flex flex-col w-full text-base bg-white sm:text-sm overflow-ellipsis">
              {product.name}
            </h2>
          </>
        )}

        {variant === 'simple' && (
          <>
            {process.env.COMMERCE_WISHLIST_ENABLED && (
              <WishlistButton
                className={s.wishlistButton}
                productId={product.id}
                variant={product.variants[0]}
              />
            )}
            <div className={s.imageContainer}>
              {product?.images && (
                <div className="">
                  <Image
                    alt={product.name || 'Product Image'}
                    className={s.productImage}
                    src={product.images[0]?.url || placeholderImg}
                    height={540}
                    width={540}
                    quality="85"
                    objectFit="contain"
                    {...imgProps}
                  />
                  {!noNameTag && (
                    <div className={s.header}>
                      <h3 className={s.name}>
                        <span>{product.name}</span>
                      </h3>
                      <div className={s.price}>{`${price} `}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}

        {variant === 'category' && (
          <>
            {process.env.COMMERCE_WISHLIST_ENABLED && (
              <WishlistButton
                className={s.wishlistButton}
                productId={product.id}
                variant={product.variants[0]}
              />
            )}
            <div className={s.productImageContainer}>
              {product?.images && (
                <div className="">
                  <Image
                    alt={product.name || 'Product Image'}
                    className={s.containerProductImage}
                    src={product.images[0]?.url || placeholderImg}
                    height={540}
                    width={540}
                    quality="85"
                    objectFit="contain"
                    {...imgProps}
                  />
                  {!noNameTag && (
                    <div className={s.header}>
                      <h3 className={s.name}>
                        <span>{product.name}</span>
                      </h3>
                      <div className="flex items-center text-xs sm:-ml-2 sm:my-0.5">
                        <Rating value={4} />
                        <span className="m-1.5 mt-0.5 sm:m-1 sm:mt-1.5 ">
                          (36)
                        </span>
                      </div>
                      <div className={s.price}>{`${price} `}</div>
                      <p className="w-40 text-xs whitespace-normal text-accent-4 sm:w-full sm:text-sm">
                        10% discount with Citibank (code CB10DEC)
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}

        {variant === 'default' && (
          <>
            {process.env.COMMERCE_WISHLIST_ENABLED && (
              <WishlistButton
                className={s.wishlistButton}
                productId={product.id}
                variant={product.variants[0] as any}
              />
            )}

            <div className={s.imageContainer}>
              {product?.images && (
                <div className="flex flex-col items-center justify-center">
                  <Image
                    alt={product.name || 'Product Image'}
                    className={s.productImage}
                    src={product.images[0]?.url || placeholderImg}
                    height={220}
                    width={220}
                    quality="85"
                    layout="fixed"
                    objectFit="contain"
                    {...imgProps}
                  />
                  <ProductTag name={product.name} price={`${price} `} />
                  {/* <h2>{`${price} ${product.price?.currencyCode}`}</h2> */}
                </div>
              )}
            </div>
          </>
        )}
      </a>
    </Link>
  )
}

export default ProductCard
