import React from 'react'
import { Items } from './Items'
import { TaskInput } from './TaskInput';

export const Card = ({ owner, tasks, addTask, index }) => {

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
        <TaskInput index={index} owner={owner} addTask={addTask} />
    </div>
  )
}
