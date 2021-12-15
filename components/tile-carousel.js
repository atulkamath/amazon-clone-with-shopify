import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const tileData = [
  {
    name: 'https://m.media-amazon.com/images/I/51MQdUhBcTL._SR270,360_.jpg',
    link: '',
  },
  {
    name: 'https://m.media-amazon.com/images/I/51Lo8qgwCYL._SR270,360_.jpg',
    link: '/tvs',
  },
  {
    name: 'https://m.media-amazon.com/images/I/51-+6nr0bDL._SR270,360_.jpg',
    link: '/clothing',
  },
  {
    name: 'https://m.media-amazon.com/images/I/516E3tkOPsL._SR270,360_.jpg',
    link: '/',
  },
  {
    name: 'https://m.media-amazon.com/images/I/31QCcRPqmBL._SR270,360_.jpg',
    link: '/',
  },
  {
    name: 'https://m.media-amazon.com/images/I/31-1IZQoOqL._SR270,360_.jpg',
    link: '/',
  },
  {
    name: 'https://m.media-amazon.com/images/I/51Uuq+j9iqL._SR270,360_.jpg',
    link: '/',
  },
]

const TileCarousel = () => {
  return (
    <div className="flex pl-2 -mt-12 space-x-4 overflow-x-scroll list-none shadow-xl cursor-pointer md:m-4 md:-mt-72 md:mb-24 bg-accent-2">
      <div className="z-10 flex flex-col p-3 bg-white rounded whitespace-nowrap hide-scroll-bar">
        <h1 className="text-xl font-bold">Welcome</h1>
        <h1 className="text-base">Sign in for the best experience</h1>
        <button className="p-2 mt-12 mb-2 text-sm bg-yellow-300 rounded-md ">
          Sign in securely
        </button>
        <a className="text-amazon-light-blue">Create an account</a>
      </div>
      {tileData.map((item, index) => (
        <Link key={index} passHref href={`/search${item.link}`}>
          <li>
            <Image
              className="rounded-md drop-shadow-2xl"
              src={item.name}
              width={150}
              height={200}
              alt="error"
              layout="fixed"
            />
          </li>
        </Link>
      ))}
    </div>
  )
}

export default TileCarousel
