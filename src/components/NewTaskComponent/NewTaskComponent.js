import React, { useState } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './NewTaskComponent.scss'

const NewTaskComponent = ({data, setTasks}) => {
  const [text, setText] = useState('');

  const addNewTask = async () => {
      await axios.post('http://localhost:8000/createTask', {
      text,
      isCheck: false
    }).then(res => {
      setText('');
      data.push(res.data.data);
      setTasks([...data]);
    });
  }

  return(
  <div className = 'add-new-task'>
    <TextField 
       id="standard-basic" 
       label="Введите таску" 
       variant="standard" 
       value = {text} 
       onChange = {(e) => setText(e.target.value)} 
     />
    <Button 
       onClick = {() => addNewTask()} 
       variant="contained" 
       endIcon={<SendIcon />}
     > Add 
    </Button>
  </div>
)}

export default NewTaskComponent