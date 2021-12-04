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

  const [left, setLeft] = useState(false)
  const [right, setRight] = useState(false)
  const [count, setCount] = useState(0)
  const [leftCount, setLeftCount] = useState(4)

  const leftButton = () => {
    console.log(leftCount)
    setLeft(true)
    setLeftCount(leftCount + 1)

    if (leftCount > 5) {
      setLeftCount(4)
    }
  }
  const rightButton = () => {
    console.log(count)
    setRight(true)
    setCount(count + 1)

    if (count > 2) {
      setCount(0)
    }
  }
  return (
    <div className="hidden w-full sm:flex ">
      <button
        className="absolute z-20 items-center justify-center top-1/4 left-10"
        onClick={leftButton}
      >
        <ChevronLeftIcon className="w-24 h-16" />
      </button>
      <button
        className="absolute z-20 items-center justify-center top-1/4 right-10"
        onClick={rightButton}
      >
        <ChevronRightIcon className="w-24 h-16" />
      </button>

      {largeImage.map((item, index) => (
        <div
          className={
            right || left
              ? `transform translate-x-count${count} transition duration-500`
              : ''
          }
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
