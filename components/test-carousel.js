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
  const rightButton = () => {
    setRight(true)
    setCount(count++)
  }
  const [firstIndex, setFirstIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(1)
  const [right, setRight] = useState(false)
  const [count, setCount] = useState(1)
  return (
    <div className="flex w-full ">
      <button className="absolute z-20 top-20" onClick={rightButton}>
        Right
      </button>
      {largeImage.map((item, index) => (
        <div
          className={
            right
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
