import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import RoundCarousel from '@components/round-carousel'
import TileCarousel from '@components/tile-carousel'
import { Grid, Hero, Marquee } from '@components/ui'
import commerce from '@lib/api/commerce'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 20 },
    config,
    preview,
    // Sale or provider only
    ...({ featured: true } as any),
  })

  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise
  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

export default function Home({
  products,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <RoundCarousel />

      <Hero />
      <h1 className="px-4 pt-4 text-2xl border-t-4 border-gray-300 bg-accent-2">
        {' '}
        White Friday Deals
      </h1>
      <Grid className="flex p-4 -ml-4 space-x-4 overflow-x-scroll bg-accent-2 hide-scroll-bar ">
        {products.map((product: any, _i: number) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Grid
        variant="filled"
        className="grid grid-cols-2 lg:hidden hide-scroll-bar"
        title="Deals on t-shirts!"
      >
        {products.slice(0, 4).map((product: any, _i: number) => (
          <ProductCard variant="slim" key={product.id} product={product} />
        ))}
      </Grid>
      <Grid
        variant="filled"
        className="grid grid-cols-2 lg:hidden hide-scroll-bar"
        title="Deals on electronics!"
      >
        {products.slice(4, 8).map((product: any, _i: number) => (
          <ProductCard variant="slim" key={product.id} product={product} />
        ))}
      </Grid>

      <Grid className="hidden grid-cols-4 bg-accent-2 lg:grid">
        <Grid
          title="Latest t-shirt deals"
          variant="filled"
          className="items-center justify-center hidden grid-cols-2 gap-4 lg:grid hide-scroll-bar"
        >
          {products.slice(0, 4).map((product: any, _i: number) => (
            <ProductCard variant="slim" key={product.id} product={product} />
          ))}
        </Grid>
        <Grid
          title="Latest electronic deals"
          variant="filled"
          className="items-center justify-center hidden grid-cols-2 gap-4 lg:grid hide-scroll-bar "
        >
          {products.slice(4, 8).map((product: any, _i: number) => (
            <ProductCard variant="slim" key={product.id} product={product} />
          ))}
        </Grid>
      </Grid>

      <h1 className="px-4 pt-4 text-xl bg-accent-2 whitespace-nowrap">
        Last chance deals | Up to 40% off
      </h1>
      <Grid className="flex p-4 -ml-4 space-x-4 overflow-x-scroll border-none bg-accent-2 hide-scroll-bar ">
        {products.slice(6, 13).map((product: any, _i: number) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      {/* </Grid> 
       <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      />
      */}
    </>
  )
}

Home.Layout = Layout
