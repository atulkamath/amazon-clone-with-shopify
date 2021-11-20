import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import Image from 'next/image'
import { MenuIcon } from '@heroicons/react/solid'
import { LocationMarkerIcon } from '@heroicons/react/outline'

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
        <MenuIcon className="w-8 h-8 text-white lg:mr-2 lg:hidden" />
        <Link href="/">
          {/* className={s.logo} */}
          <a className="pt-2" aria-label="Logo">
            <Logo />
          </a>
        </Link>
        <div className="items-end justify-center hidden text-white lg:flex">
          <LocationMarkerIcon className="w-8 h-8" />
          <div className="flex flex-col text-xs">
            <h2>Deliver To</h2>
            <div className="font-bold">United Arab Emirates</div>
          </div>
        </div>
        {/* <nav className={s.navMenu}>
            <Link href="/search">
              <a className={s.link}>All</a>
            </Link>
            {links?.map((l) => (
              <Link href={l.href} key={l.href}>
                <a className={s.link}>{l.label}</a>
              </Link>
            ))}
          </nav> */}

        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="items-end flex-1 hidden lg:flex">
            <Searchbar />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 12 6"
            >
              <rect width="12" height="6" fill="#00732f" id="green" />
              <rect width="12" height="4" y="2" fill="#fff" />
              <rect width="12" height="2" y="4" />
              <rect width="3" height="6" fill="#f00" id="red" />
            </svg>
          </div>
        )}
        <UserNav />
      </div>
      <div className="lg:hidden">
        <Searchbar />
      </div>

      <div className="flex p-1 py-3 space-x-4 overflow-x-scroll font-semibold text-white list-none lg:p-4 lg:bg-amazon-light-blue whitespace-nowrap">
        {navData.map((data, id) => (
          <a href="#" key={id}>
            {data}
          </a>
        ))}
      </div>
    </Container>
  </NavbarRoot>
)

export default Navbar
