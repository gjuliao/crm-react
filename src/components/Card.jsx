import React from 'react'
import { Items } from './Items'

export const Card = ({ items, onItemClick }) => {

    const tasks = items.tasks;
    const owner = items.owner;

    console.log(items, 'Card');
  return (
    <div className='group-card'>
        <h2 className='card-title'>{owner}</h2>
        <div>
        {tasks.map((item, index) => (
            <Items key={index} item={item} />
        ))}
        </div>
        <button>submit</button>
    </div>
  )
}
