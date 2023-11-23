import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';

function App() {

  const [list1, setList1] = useState(['task1', 'task2']);

  const handleItemClick = () => {
    // setList1((el) => setList.filter((i) => i !== list1));
  }

  console.log(list1);

  return (
    <div className="container">
      <Card items={list1} onItemClick={handleItemClick} />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
