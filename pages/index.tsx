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
    variables: { first: 6 },
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
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <RoundCarousel />
      <Hero />
      <h1 className="px-4 pt-4 text-2xl bg-accent-2"> White Friday Deals</h1>
      <Grid className="flex p-4 space-x-8 overflow-x-scroll border-none bg-accent-2 hide-scroll-bar ">
        {products.map((product: any, _i: number) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Grid
        variant="filled"
        className="grid grid-cols-2 lg:hidden hide-scroll-bar"
      >
        {products.slice(1, 5).map((product: any, _i: number) => (
          <ProductCard variant="slim" key={product.id} product={product} />
        ))}
      </Grid>
      <Grid
        variant="filled"
        className="grid grid-cols-2 lg:hidden hide-scroll-bar"
      >
        {products.slice(1, 5).map((product: any, _i: number) => (
          <ProductCard variant="slim" key={product.id} product={product} />
        ))}
      </Grid>
      <Grid className="grid-cols-4 lg:grid">
        <Grid
          variant="filled"
          className="items-center justify-center hidden grid-cols-2 gap-4 border-none lg:grid hide-scroll-bar"
        >
          {products.slice(0, 4).map((product: any, _i: number) => (
            <ProductCard variant="slim" key={product.id} product={product} />
          ))}
        </Grid>
        <Grid
          variant="filled"
          className="items-center justify-center hidden grid-cols-2 gap-4 border-none lg:grid hide-scroll-bar"
        >
          {products.slice(2, 6).map((product: any, _i: number) => (
            <ProductCard variant="slim" key={product.id} product={product} />
          ))}
        </Grid>
      </Grid>

      {/* </Grid> */}
      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}
    </>
  )
}

Home.Layout = Layout
