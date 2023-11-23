import React from 'react'

export const TaskInput = ({ addTask, index }) => {

    const handleInputValue = () => {
        const userInput = window.prompt('Type your new task here:');
        if (userInput){
            addTask(index, userInput);
        }
    }

  return (
    <form>
        <button onClick={handleInputValue}> + Add a Task</button>
    </form>
  )
}
