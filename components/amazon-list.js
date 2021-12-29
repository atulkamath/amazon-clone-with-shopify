import React from 'react'

const AmazonList = ({}) => {
  return (
    <div className="text-sm font-medium">
      <h2 className="p-1 text-lg font-bold">Orders</h2>
      <ul>
        <li className="listStart">Your Orders</li>
        <li className="listEnd">Subscribe & Save</li>
      </ul>
      <h2 className="p-1 text-lg font-bold">Account Settings</h2>
      <ul>
        <li className="listStart">Login & Security</li>
        <li className="listEnd">Your Addresses</li>
      </ul>
      <ul>
        <h2 className="p-1 text-lg font-bold">Amazon Wallet</h2>
        <li className="listStart">Manage gift card balance</li>
        <li className="listEnd">Manage payment options</li>
      </ul>
    </div>
  )
}

export default AmazonList
