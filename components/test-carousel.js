import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { useState } from 'react'

const TestCarousel = () => {
  const largeImage = [
    'https://m.media-amazon.com/images/I/71gs3Tx7IPL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71nw3LjRK3L._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71HZnvHVBYL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71JS6GUuXoL._SX3000_.jpg',
  ]

  const [count, setCount] = useState(0)
  const [leftCount, setLeftCount] = useState(4)
  const [firstIndex, setFirstIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(1)
  const leftButton = () => {
    console.log(leftCount)

    setLeftCount(leftCount + 1)

    if (leftCount > 7) {
      setLeftCount(4)
    }
  }
  const rightButton = () => {
    console.log(count)

    setCount(count + 1)

    if (count > 2) {
      setCount(0)
    }
  }
  return (
    <div className="hidden w-full sm:flex ">
      <button
        className="absolute z-20 items-center justify-center top-1/4 left-10"
        onClick={() => {
          setFirstIndex(firstIndex - 1)
          setLastIndex(lastIndex - 1)
        }}
      >
        <ChevronLeftIcon className="w-24 h-16" />
      </button>
      <button
        className="absolute z-20 items-center justify-center top-1/4 right-10"
        onClick={() => {
          setFirstIndex(firstIndex + 1)
          if (firstIndex > 2) {
            setFirstIndex(0)
          }
          setLastIndex(lastIndex + 1)
        }}
      >
        <ChevronRightIcon className="w-24 h-16" />
      </button>
      {console.log(firstIndex)}
      {largeImage.map((item, index) => (
        <div
          className={`transform translate-x-count${firstIndex} transition duration-500`}
          key={index}
        >
          <Image
            src={item}
            width={1500}
            height={600}
            alt="error"
            layout="fixed"
          />
        </div>
      ))}
    </div>
  )
}

export default TestCarousel
