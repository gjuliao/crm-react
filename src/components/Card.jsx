import React from 'react'
import { Items } from './Items'

export const Card = () => {
  return (
    <div className='group-card'>
        <h2 className='card-title'>Title</h2>
        <div>
            <Items />
            <Items />
            <Items />
        </div>
        <button>submit</button>
    </div>
  )
}
