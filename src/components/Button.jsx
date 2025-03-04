import React from 'react'

const Button = ({onClick, value, title}) => {
  return (
    <button onClick={onClick} value={value} className='py-2 bg-transparent cursor-pointer rounded-md text-zinc-500 border border-zinc-300 px-5'>
      {title}
    </button>
  )
}

export default Button