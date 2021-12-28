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
    <Container className="p-5 sm:ml-6">
      <Text variant="pageHeading">Your Account</Text>
      {data && (
        <div>
          <ul className="list-none last:bg-red">
            <li className="font-bold">Orders</li>
            <li className="p-3 border rounded-lg rounded-bl-none rounded-br-none">
              Your Orders
            </li>
            <li className="p-3 border rounded-lg rounded-tl-none rounded-tr-none">
              Subscribe & Save
            </li>
          </ul>
          <ul className="list-none">
            <li className="font-bold">Orders</li>
            <li className="p-3 border rounded-lg rounded-r-none">
              Your Orders
            </li>
            <li className="p-3 border rounded-lg rounded-r-none">
              Subscribe & Save
            </li>
          </ul>
        </div>
      )}
    </Container>
  )
}

Profile.Layout = Layout
