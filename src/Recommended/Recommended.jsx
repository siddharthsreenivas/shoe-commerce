import React from 'react'
import Button from '../components/Button'

const Recommended = ({handleClick}) => {
  return (
    <>
      <div>
        <h2 className='ml-80 text-xl mt-5 mb-5'>Recommended</h2>
        <div className='ml-80 flex items-center gap-3'>
          <Button onClick={handleClick} value='' title='All Products' />
          <Button onClick={handleClick} value='Nike' title='Nike' />
          <Button onClick={handleClick} value='Adidas' title='Adidas' />
          <Button onClick={handleClick} value='Puma' title='Puma' />
          <Button onClick={handleClick} value='Vans' title='Vans' />
        </div>
      </div>
    </>
  )
}

export default Recommended