import React from 'react'
import { Items } from './Items'
import { TaskInput } from './TaskInput';

export const Card = ({ items, onItemClick }) => {

    const tasks = items.tasks;
    const owner = items.owner;

    console.log(items, 'Card');
  return (
    <div className='group-card'>
        <h2 className='card-title'>{owner}</h2>
        <ul className='list-items'>
        {tasks.map((item, index) => (
          <li key={index}>
            <Items item={item} />
          </li>
        ))}
        </ul>
        <TaskInput />
    </div>
  )
}
