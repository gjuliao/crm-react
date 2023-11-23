import React from 'react'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";



export const Items = ({ item}) => {
  return (
    <div className='items'>
        <GrPrevious className='icon' />
        <p>{item}</p>
        <GrNext className='icon'/>
    </div>
  )
}
