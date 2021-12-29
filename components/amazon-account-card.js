import React from 'react'
import Image from 'next/image'

const AmazonAccountCard = ({ title, subtitle, image }) => {
  return (
    <div className="items-center hidden p-4 border rounded-lg lg:flex">
      <Image
        alt={title}
        src={image}
        width="60"
        height="60"
        objectFit="contain"
      />
      <div className="inline-block">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  )
}

export default AmazonAccountCard
