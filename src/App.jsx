import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';

function App() {

  const [list1, setList1] = useState( 
    {
      'index': 0,
      'owner': 'Brad',
      'tasks': ['task1', 'task2']
    });

    const [list2, setList2] = useState( 
      {
        'index': 1,
        'owner': 'Giselle',
        'tasks': ['task3', 'task4', 'task5']
      });

      const [list3, setList3] = useState( 
        {
          'index': 2,
          'owner': 'Lorenzo',
          'tasks': ['task6', 'task7', 'task8', 'task9']
        });

        const [list4, setList4] = useState( 
          {
            'index': 3,
            'owner': 'Mike',
            'tasks': ['task10', 'task11']
          });

  const handleItemClick = () => {
    // setList1((el) => setList.filter((i) => i !== list1));
  }

  console.log(list1);

  return (
    <div className="container">
      <Card items={list1} onItemClick={handleItemClick} />
      <Card items={list2} onItemClick={handleItemClick}/>
      <Card items={list3} onItemClick={handleItemClick}/>
      <Card items={list4} onItemClick={handleItemClick}/>
    </div>
  );
}

export default App;
