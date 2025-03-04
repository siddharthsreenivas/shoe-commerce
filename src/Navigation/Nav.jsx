import React from 'react'
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({query, handleInputChange}) => {
  return (
    <nav className='flex py-6 px-12 items-center justify-evenly border-b'>
      <div>
        <input type="text" onChange={handleInputChange} value={query} placeholder='Enter Shoe Name' className='py-2 px-6 rounded-md bg-zinc-100 placeholder:text-sm placeholder:text-zinc-400' />
      </div>

      <div className='flex items-center gap-5'>
        <a href='#home'>
          <FiHeart size={22}/>
        </a>
        <a href='#home'>
          <AiOutlineShoppingCart size={22} />
        </a>
        <a href='#home'>
          <AiOutlineUserAdd size={22} />
        </a>
      </div>
    </nav>
  )
}

export default Nav