import React from 'react'

export const TaskInput = ({ addTask, index, owner }) => {

    const handleInputValue = (event) => {
        event.preventDefault();
        const userInput = window.prompt(`Type new task for ${owner}:`);
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
