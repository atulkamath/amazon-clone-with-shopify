import { MenuAlt1Icon, MenuIcon } from '@heroicons/react/outline'
import React from 'react'

const Menu = () => {
  return (
    <div className>
      <div className="absolute z-10 hidden w-full h-screen text-white bg-black bg-opacity-75 ">
        <div className="w-3/4 h-full p-4 opacity-100 bg-amazon-dark-blue">
          <div>
            Browse <br /> Amazon
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Menu
