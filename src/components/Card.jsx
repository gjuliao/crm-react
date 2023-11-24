import React from 'react'
import { Items } from './Items'
import { TaskInput } from './TaskInput';

export const Card = ({ owner, tasks, addTask, listIndex, changeTaskPosition }) => {

  return (
    <div className='group-card'>
        <div className={`item-${listIndex}`}>
          <h2 className='card-title'>{owner}</h2>
        </div>
        <ul className='list-items'>
        {tasks.map((item, taskIndex) => (
          <li key={taskIndex}>
            <Items item={item} listIndex={listIndex} taskIndex={taskIndex} changeTaskPosition={changeTaskPosition} />
          </li>
        ))}
        </ul>
        <TaskInput index={listIndex} owner={owner} addTask={addTask} />
    </div>
  )
}
