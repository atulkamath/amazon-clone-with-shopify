import React from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/link'

const data = [
  {
    name: 'Deals',
    image: 'https://m.media-amazon.com/images/I/210q9h5bVML._AC_SR160,140_.png',
    link: '/search',
  },
  {
    name: 'Fashion',
    image: 'https://m.media-amazon.com/images/I/11HhMZTlTJL._AC_SR160,140_.jpg',
    link: '/clothing',
  },
  {
    name: 'Mobiles',
    image: 'https://m.media-amazon.com/images/I/11qytD-YlAL._AC_SR160,140_.jpg',
    link: '/search',
  },
  {
    name: 'Supermarket',
    image: 'https://m.media-amazon.com/images/I/11eIZBrxiEL._AC_SR160,140_.jpg',
    link: '/search',
  },
  {
    name: 'Home',
    image: 'https://m.media-amazon.com/images/I/11+uMy5tz1L._AC_SR160,140_.jpg',
    link: '/search',
  },
  {
    name: 'Beauty',
    image: 'https://m.media-amazon.com/images/I/01IPchFEXyL._AC_SR160,140_.jpg',
    link: '/search',
  },
  {
    name: 'Kitchen',
    image: 'https://m.media-amazon.com/images/I/11L6mokpNqL._AC_SR160,140_.jpg',
    link: '/search',
  },
]

const RoundCarousel = () => {
  return (
    <div className="flex items-start p-4 space-x-4 overflow-x-scroll list-none border-b-4 lg:hidden hide-scroll-bar ">
      {data.map((item, index) => (
        <Link key={index} href={`/search${item.link}`}>
          <li
            className="flex flex-col items-center text-sm font-light rounded-full "
            key={index}
          >
            <Image
              src={item.image}
              width={75}
              height={75}
              alt="error"
              layout="fixed"
            />
            {item.name}
          </li>
        </Link>
      ))}
    </div>
  )
}

export default RoundCarousel
