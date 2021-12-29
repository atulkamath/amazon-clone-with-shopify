import React from 'react'
import AmazonAccountCard from './amazon-account-card'
const AmazonList = ({}) => {
  return (
    <div className="w-3/4 grid-cols-3 grid-rows-3 gap-6 lg:grid">
      <AmazonAccountCard
        title="Your Orders"
        subtitle="Track,return"
        image="https://images-na.ssl-images-amazon.com/images/G/39/x-locale/cs/help/images/gateway/self-service/order._CB661218870_.png"
      />
      <AmazonAccountCard
        title="Your Orders"
        subtitle="Track,return"
        image="https://images-na.ssl-images-amazon.com/images/G/39/x-locale/cs/help/images/gateway/self-service/order._CB661218870_.png"
      />{' '}
      <AmazonAccountCard
        title="Your Orders"
        subtitle="Track,return"
        image="https://images-na.ssl-images-amazon.com/images/G/39/x-locale/cs/help/images/gateway/self-service/order._CB661218870_.png"
      />{' '}
      <AmazonAccountCard
        title="Your Orders"
        subtitle="Track,return"
        image="https://images-na.ssl-images-amazon.com/images/G/39/x-locale/cs/help/images/gateway/self-service/order._CB661218870_.png"
      />{' '}
      <AmazonAccountCard
        title="Your Orders"
        subtitle="Track,return"
        image="https://images-na.ssl-images-amazon.com/images/G/39/x-locale/cs/help/images/gateway/self-service/order._CB661218870_.png"
      />{' '}
      <AmazonAccountCard
        title="Your Orders"
        subtitle="Track,return"
        image="https://images-na.ssl-images-amazon.com/images/G/39/x-locale/cs/help/images/gateway/self-service/order._CB661218870_.png"
      />
      <div className="text-sm font-medium lg:hidden">
        <h2 className="p-1 text-lg font-bold">Orders</h2>
        <ul>
          <li className="listStart">
            {' '}
            <button>Your Orders</button>{' '}
          </li>
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
    </div>
  )
}

export default AmazonList
