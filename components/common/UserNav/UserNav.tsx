import { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import type { LineItem } from '@commerce/types/cart'
import useCart from '@framework/cart/use-cart'
import useCustomer from '@framework/customer/use-customer'
import { Avatar } from '@components/common'
import { Heart, Bag } from '@components/icons'
import { useUI } from '@components/ui/context'
import Button from '@components/ui/Button'
import DropdownMenu from './DropdownMenu'
import s from './UserNav.module.css'

interface Props {
  className?: string
}

const countItem = (count: number, item: LineItem) => count + item.quantity

const UserNav: FC<Props> = ({ className }) => {
  const { data } = useCart()
  const { data: customer } = useCustomer()
  const { toggleSidebar, closeSidebarIfPresent, openModal } = useUI()
  const itemsCount = data?.lineItems.reduce(countItem, 0) ?? 0

  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        {process.env.COMMERCE_CUSTOMERAUTH_ENABLED && (
          <li className={s.item}>
            {customer ? (
              <div className="mr-2 capitalize text-accent-2">
                <DropdownMenu />
              </div>
            ) : (
              <button
                className={s.avatarButton}
                aria-label="Menu"
                onClick={() => openModal()}
              >
                <h3 className="text-white lg:hidden">Sign In</h3>
                <div className="flex-col items-start hidden text-white lg:flex">
                  <h3 className="font-bold">Accounts and Lists</h3>
                </div>
                <Avatar />
              </button>
            )}
            <a
              className="flex-col items-start justify-center hidden ml-6 text-white lg:flex"
              href="#"
            >
              <h3>Returns</h3>
              <h3 className="font-bold">& Orders</h3>
            </a>
          </li>
        )}

        {process.env.COMMERCE_CART_ENABLED && (
          <li className={s.item}>
            <Button
              className={s.item}
              variant="naked"
              onClick={toggleSidebar}
              aria-label="Cart"
            >
              <Bag />
              {itemsCount > 0 && (
                <span className={s.bagCount}>{itemsCount}</span>
              )}
              <h3 className="hidden text-xs text-white lg:block">Cart</h3>
            </Button>
          </li>
        )}
        {process.env.COMMERCE_WISHLIST_ENABLED && (
          <li className={s.item}>
            <Link href="/wishlist">
              <a onClick={closeSidebarIfPresent} aria-label="Wishlist">
                <Heart />
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default UserNav
