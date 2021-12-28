import React from 'react'

const AmazonList = ({ title, listLink }) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold">{title}</h1>
      <h2 className="p-3 border  rounded-xl">{listLink}</h2>
    </div>
  )
}

export default AmazonList
