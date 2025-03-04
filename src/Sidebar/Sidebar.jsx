import React from 'react'
import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'
import { TiShoppingCart } from "react-icons/ti";

const Sidebar = ({handleChange}) => {
  return (
    <>
      <section className='w-[17%] fixed overflow-auto pb-5 h-full z-10 flex flex-col items-center border-r-2 border-r-zinc-300'>
        <div className='mb-16'>
          <TiShoppingCart size={40} className='mt-5'/>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />

      </section>
    </>
  )
}

export default Sidebar