import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Github, Vercel } from '@components/icons'
import { Logo, Container } from '@components/ui'
import { I18nWidget } from '@components/common'
import s from './Footer.module.css'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Your Orders',
    url: '/',
  },
  {
    name: 'Your Subscribe & Save',
    url: '/',
  },
  {
    name: 'Your Addresses',
    url: '/',
  },
  {
    name: 'Your Lists',
    url: '/',
  },
  {
    name: 'Your Amazon.ae',
    url: '/',
  },
]

const Footer: FC<Props> = ({ className, pages }) => {
  const { sitePages } = usePages(pages)
  const rootClassName = cn(s.root, className)

  return (
    <footer className={rootClassName}>
      <Container>
        <div className="grid grid-cols-2 p-4 py-12 transition-colors duration-150 border-b whitespace-nowrap lg:grid-cols-12 border-accent-2 text-primary bg-amazon-dark-blue">
          <div className="col-span-1 lg:col-span-8">
            <div className="grid grid-cols-2 gap-x-48 md:grid-rows-4 md:grid-cols-3 md:grid-flow-col">
              {[...links, ...sitePages].map((page) => (
                <span key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className="text-white transition duration-150 ease-in-out hover:text-accent-6">
                      {page.name}
                    </a>
                  </Link>
                </span>
              ))}
            </div>
          </div>
          {/* <div className="flex items-start col-span-1 lg:col-span-2 lg:justify-end text-primary">
            <div className="flex items-center h-10 space-x-6">
              <a
                className={s.link}
                aria-label="Github Repository"
                href="https://github.com/atulkamath/amazon-clone-with-shopify"
              >
                <Github />
              </a>
            </div>
          </div> */}
        </div>
      </Container>
    </footer>
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)
      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return
      sitePages.push(page)
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
  }
}

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
