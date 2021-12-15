import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

const LargeCarousel = () => {
  const largeImage = [
    {
      imgUrl: 'https://m.media-amazon.com/images/I/71nw3LjRK3L._SX3000_.jpg',
      link: '/clothing',
    },
    {
      imgUrl: 'https://m.media-amazon.com/images/I/71HZnvHVBYL._SX3000_.jpg',
      link: '/',
    },
    {
      imgUrl: 'https://m.media-amazon.com/images/I/71JS6GUuXoL._SX3000_.jpg',
      link: '/tvs',
    },
    {
      imgUrl: 'https://m.media-amazon.com/images/I/71gs3Tx7IPL._SX3000_.jpg',
      link: '/',
    },
  ]

  const [firstIndex, setFirstIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(1)

  return (
    <div className="hidden w-full overflow-x-hidden cursor-pointer sm:flex ">
      <button
        className="absolute z-20 items-center justify-center top-60 left-10"
        onClick={() => {
          setFirstIndex(firstIndex - 1)
          if (firstIndex < -3) {
            setFirstIndex(-1)
          }
          setLastIndex(lastIndex - 1)
        }}
      >
        <ChevronLeftIcon className="w-24 h-16 text-white" />
      </button>
      <button
        className="absolute z-20 items-center justify-center top-60 right-10"
        onClick={() => {
          setFirstIndex(firstIndex + 1)
          if (firstIndex > 2) {
            setFirstIndex(0)
          }
          setLastIndex(lastIndex + 1)
        }}
      >
        <ChevronRightIcon className="w-24 h-16 text-white" />
      </button>
      {largeImage.map((item, index) => (
        <Link key={index} passHref href={`/search${item.link}`}>
          <div
            className={` transform translate-x-count${firstIndex} transition duration-500`}
          >
            <Image
              src={item.imgUrl}
              width={1500}
              height={600}
              alt="error"
              layout="fixed"
              priority
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default LargeCarousel
