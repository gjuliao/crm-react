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


  console.log(lists, 'in app');
  return (
    <div className="container">
      {lists.map((list) => (
        <Card key={list.index} index={list.index} owner={list.owner} tasks={list.tasks} addTask={addTask} />
      ))}
    </div>
  );
}

export default App;
