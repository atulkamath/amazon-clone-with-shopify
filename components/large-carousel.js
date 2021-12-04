import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { useState } from 'react'
const LargeCarousel = () => {
  const largeImage = [
    'https://m.media-amazon.com/images/I/71gs3Tx7IPL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71nw3LjRK3L._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71HZnvHVBYL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71JS6GUuXoL._SX3000_.jpg',
  ]

  const [firstIndex, setFirstIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(1)

  return (
    <div className={'hidden overflow-x-scroll sm:flex '}>
      {firstIndex > 0 && (
        <div
          className=""
          onClick={() => {
            setFirstIndex(firstIndex - 1)
            setLastIndex(lastIndex - 1)
            if (firstIndex > 3) {
              setFirstIndex(0)
            }
          }}
        >
          <button>
            <ChevronLeftIcon className="absolute z-20 h-20 text-white w-14 left-16 top-52" />
          </button>
        </div>
      )}
      {lastIndex < largeImage.length && (
        <div
          onClick={() => {
            setFirstIndex(firstIndex + 1)
            setLastIndex(lastIndex + 1)
            if (firstIndex > 3) {
              setFirstIndex(0)
            }
          }}
        >
          <button>
            <ChevronRightIcon className="absolute z-20 h-20 text-white w-14 top-52 right-16" />
          </button>
        </div>
      )}
      {largeImage.map((item, i) => {
        if (i >= firstIndex && i < lastIndex) {
          return (
            <Image
              width={1440}
              height={600}
              src={item}
              layout={'fixed'}
              alt="hero image"
            />
          )
        } else {
          return null
        }
      })}
    </div>
  )
}

export default LargeCarousel
