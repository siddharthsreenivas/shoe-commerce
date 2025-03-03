import React from 'react'

const Recommended = () => {
  return (
    <>
      <div>
        <h2 className='ml-80 text-xl mt-5 mb-5'>Recommended</h2>
        <div className='ml-80 flex items-center gap-3'>
          <button className='py-2 bg-transparent cursor-pointer rounded-md text-zinc-500 border border-zinc-300 px-5'>All Products</button>
          <button className='py-2 bg-transparent cursor-pointer rounded-md text-zinc-500 border border-zinc-300 px-5'>Nike</button>
          <button className='py-2 bg-transparent cursor-pointer rounded-md text-zinc-500 border border-zinc-300 px-5'>Adidas</button>
          <button className='py-2 bg-transparent cursor-pointer rounded-md text-zinc-500 border border-zinc-300 px-5'>Puma</button>
          <button className='py-2 bg-transparent cursor-pointer rounded-md text-zinc-500 border border-zinc-300 px-5'>Vans</button>
        </div>
      </div>
    </>
  )
}

export default Recommended