import React from 'react'
import Input from '../../components/Input'

const Colors = ({handleChange}) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title mt-5">Colors</h2>

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            value=''
            type="radio"
            name='test1'
          />
          <span className="checkmark all"></span>
          All
        </label>

        <Input handleChange={handleChange} value='black' title='Black' name='test1' color='black'  />
        <Input handleChange={handleChange} value='blue' title='Blue' name='test1' color='blue'  />
        <Input handleChange={handleChange} value='red' title='Red' name='test1' color='red'  />
        <Input handleChange={handleChange} value='green' title='Green' name='test1' color='green'  />

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            value='white'
            type="radio"
            name='test1'
          />
          <span className="checkmark" style={{backgroundColor: 'white', border: '2px solid black'}}></span>
          Whtie
        </label>

      </div>
    </>
  )
}

export default Colors