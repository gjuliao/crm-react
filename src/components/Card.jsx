import React from 'react'
import { Items } from './Items'

export const Card = ({ items = [], onItemClick }) => {

    console.log(items, 'Card');
  return (
    <div className='group-card'>
        <h2 className='card-title'>Title</h2>
        <div>
        {items.map((item, index) => (
            <Items key={index} item={item} />
        ))}
            <Items />
            <Items />
        </div>
        <button>submit</button>
    </div>
  )
}
