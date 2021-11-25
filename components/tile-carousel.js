import React from 'react'
import Image from 'next/image'

const tileData = [
  'https://m.media-amazon.com/images/I/51MQdUhBcTL._SR270,360_.jpg',
  'https://m.media-amazon.com/images/I/516E3tkOPsL._SR270,360_.jpg',
  'https://m.media-amazon.com/images/I/31QCcRPqmBL._SR270,360_.jpg',
  'https://m.media-amazon.com/images/I/31-1IZQoOqL._SR270,360_.jpg',
  'https://m.media-amazon.com/images/I/51Uuq+j9iqL._SR270,360_.jpg',
  'https://m.media-amazon.com/images/I/51Lo8qgwCYL._SR270,360_.jpg',
  'https://m.media-amazon.com/images/I/51-+6nr0bDL._SR270,360_.jpg',
]

const TileCarousel = () => {
  return (
    <div className="flex pl-2 -mt-12 space-x-4 overflow-x-scroll list-none shadow-xl md:m-4 md:-mt-72 md:mb-24 bg-accent-2">
      <div className="z-10 flex flex-col p-3 bg-white rounded whitespace-nowrap hide-scroll-bar">
        <h1 className="text-xl font-bold">Welcome</h1>
        <h1 className="text-base">Sign in for the best experience</h1>
        <button className="p-2 mt-12 mb-2 text-sm bg-yellow-300 rounded-md ">
          Sign in securely
        </button>
        <a className="text-amazon-light-blue">Create an account</a>
      </div>
      {tileData.map((item, index) => (
        <li key={index}>
          <Image
            className="rounded-md drop-shadow-2xl"
            src={item}
            width={150}
            height={200}
            alt="error"
            layout="fixed"
          />
        </li>
      ))}
    </div>
  )
}

export default TileCarousel
