import React from 'react'
import Image from 'next/image'

const AmazonAccountCard = ({ title, subtitle, image }) => {
  return (
    <div className="items-center hidden p-4 border rounded-lg cursor-pointer hover:bg-accent-1 lg:flex">
      <Image
        alt={title}
        src={image}
        width="60"
        height="60"
        objectFit="contain"
      />
      <div className="inline-block ml-1">
        <h1 className="text-lg font-medium">{title}</h1>
        <h2 className="text-sm">{subtitle}</h2>
      </div>
    </div>
  )
}

export default AmazonAccountCard
