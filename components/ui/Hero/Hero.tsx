import LargeCarousel from '@components/large-carousel'
import TileCarousel from '@components/tile-carousel'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'

interface HeroProps {}

const smallImage = [
  'https://m.media-amazon.com/images/I/71Fia1VO1PL._SR1236,1080_.jpg',
  'https://m.media-amazon.com/images/I/714I3Yg0C3L._SR1236,1080_.jpg',
  'https://m.media-amazon.com/images/I/61Jhrv+qH-L._SR1236,1080_.jpg',
  'https://m.media-amazon.com/images/I/71DmEEOsz9L._SR1236,1080_.jpg',
]

const Hero: FC<HeroProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === smallImage.length - 1) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }, 3000)
    return () => clearInterval(intervalId)
  }, [currentIndex])

  return (
    <div className="bg-accent-1 ">
      <LargeCarousel />
      <div className="overflow-hidden sm:hidden">
        <Image
          width={400}
          height={350}
          src={smallImage[currentIndex]}
          layout={'responsive'}
          alt="hero image"
          priority
        />
      </div>
      <TileCarousel />
      <section className="-mb-4 lg:hidden">
        <Image
          width={'100vw'}
          height={20}
          objectFit="contain"
          src={
            'https://m.media-amazon.com/images/I/5160YmPsNLL._SR1242,150_.jpg'
          }
          alt=""
          layout="responsive"
        />
      </section>
    </div>
  )
}

export default Hero
