import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import Image from 'next/image'
import { MenuIcon } from '@heroicons/react/solid'

const navData = [
  'Todays Deals',
  'Best Sellers',
  'Electronics',
  'Shop By Category',
  'Prime',
  'New Releases',
  'Home',
  'Computers',
  'Books',
]
interface Link {
  href: string
  label: string
}
interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container>
      <div className={s.nav}>
        <MenuIcon className="w-8 h-8 mr-2 text-white" />
        <div className="">
          <Link href="/">
            {/* className={s.logo} */}
            <a aria-label="Logo">
              <Logo />
            </a>
          </Link>
          <nav className={s.navMenu}>
            <Link href="/search">
              <a className={s.link}>All</a>
            </Link>
            {links?.map((l) => (
              <Link href={l.href} key={l.href}>
                <a className={s.link}>{l.label}</a>
              </Link>
            ))}
          </nav>
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="justify-center flex-1 hidden lg:flex">
            <Searchbar />
          </div>
        )}
        <div className="flex items-center justify-end flex-1 space-x-8">
          <UserNav />
        </div>
      </div>
      <div className="flex pb-2 lg:px-6 lg:hidden">
        <Searchbar id="mobile-search" />
      </div>
      <div className="flex pb-4 m-2 space-x-4 overflow-x-scroll font-semibold text-white list-none whitespace-nowrap">
        {navData.map((data, id) => (
          <li key={id}>{data}</li>
        ))}
      </div>
    </Container>
  </NavbarRoot>
)

export default Navbar
