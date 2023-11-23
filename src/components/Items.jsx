import React from 'react'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";



export const Items = ({ item, listIndex, taskIndex, changeTaskPosition }) => {

  const handleClick = (e) => {
    e.preventDefault();
    changeTaskPosition(listIndex, taskIndex, e.target.id);
  }

  return (
    <div className='items'>
        <GrPrevious onClick={handleClick} className='icon' id='prev'/>
        <p>{item}</p>
        <GrNext onClick={handleClick} className='icon' id='next'/>
    </div>
  )
}
