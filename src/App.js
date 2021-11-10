import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import NewTaskComponent from './components/NewTaskComponent/NewTaskComponent';
import ContainerComponent from './components/ContainerComponent/ContainerComponent';

const App = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect( () => {
    axios.get('http://localhost:8000/allTasks').then(res => {
    setTasks(res.data.data);
  });
}, []);

  return (
   <div className='main'>
     <header>
       <h1>To do list</h1>
       <NewTaskComponent data={tasks} setTasks={setTasks} />
     </header>
     <ContainerComponent tasks={tasks} setTasks={setTasks} />
   </div>
  );
}

export default App;
