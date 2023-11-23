import React from 'react'

export const Items = ({item}) => {
  return (
    <div className='items'>
        <p>Left</p>
        <p>{item}</p>
        <p>Right</p>
    </div>
  )
}
