import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';

function App() {

  const [lists, setLists] = useState([
    {
      index: 0,
      owner: 'Brad',
      tasks: ['task1', 'task2'],
    },
    {
      index: 1,
      owner: 'Giselle',
      tasks: ['task3', 'task4', 'task5'],
    },
    {
      index: 2,
      owner: 'Lorenzo',
      tasks: ['task6', 'task7', 'task8', 'task9'],
    },
    {
      index: 3,
      owner: 'Mike',
      tasks: ['task10', 'task11'],
    },
  ]);

  const addTask = (listIndex, newTask) => {
    setLists((lists) => {
      const updatedLists = [...lists];
      updatedLists[listIndex] = {
        ...updatedLists[listIndex],
        tasks: [...updatedLists[listIndex].tasks, newTask],
      };
      return updatedLists;
    });
  };

  const changeTaskPosition = (listIndex, taskIndex, direction) => {
    setLists((lists) => {
      const updatedLists = [...lists];
  
      const currentList = updatedLists[listIndex];
      const targetListIndex = direction === 'next' ? listIndex + 1 : listIndex - 1;
  
      if (
        targetListIndex >= 0 &&
        targetListIndex < updatedLists.length &&
        taskIndex >= 0 &&
        taskIndex < currentList.tasks.length
      ) {
        const currentTask = currentList.tasks[taskIndex];
  
        // Create new arrays to avoid unintended changes
        const currentListTasks = [...currentList.tasks];
        const targetListTasks = [...updatedLists[targetListIndex].tasks];
  
        // Remove the task from the current list
        currentListTasks.splice(taskIndex, 1);
  
        // Calculate the correct insertIndex based on the direction
        const insertIndex = taskIndex;
  
        // Insert the task into the target list at the correct position
        targetListTasks.splice(insertIndex, 0, currentTask);
  
        // Update the lists with the new arrays
        updatedLists[listIndex] = {
          ...currentList,
          tasks: currentListTasks,
        };
  
        updatedLists[targetListIndex] = {
          ...updatedLists[targetListIndex],
          tasks: targetListTasks,
        };
      }
  
      return updatedLists;
    });
  };
  
  
  return (
    <div className="container">
      {lists.map((list) => (
        <Card key={list.index} listIndex={list.index} owner={list.owner} tasks={list.tasks} addTask={addTask} changeTaskPosition={changeTaskPosition} />
      ))}
    </div>
  );
}

export default App;
