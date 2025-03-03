import React from 'react'
import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'

const Sidebar = () => {
  return (
    <>
      <section>
        <div>
          <h1>🛒</h1>
        </div>
        <Category />
        <Colors />
        <Price />

      </section>
    </>
  )
}

export default Sidebar