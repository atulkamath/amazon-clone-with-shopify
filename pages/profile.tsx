import type { GetStaticPropsContext } from 'next'
import useCustomer from '@framework/customer/use-customer'
import commerce from '@lib/api/commerce'
import { Avatar, Layout } from '@components/common'
import { Container, Text } from '@components/ui'
import AmazonList from '@components/amazon-list'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise

  return {
    props: { pages, categories },
  }
}

export default function Profile() {
  const { data } = useCustomer()
  return (
    <Container className="p-5 lg:px-48 sm:ml-6">
      <Text variant="pageHeading">Your Account</Text>
      {data && (
        <div>
          {/* <h1 className="font-bold">Orders</h1> */}
          <AmazonList />
        </div>
      )}
    </Container>
  )
}

Profile.Layout = Layout
