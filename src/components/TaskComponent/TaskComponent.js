import React, { useState } from 'react';
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const TaskComponent = ({data , setTasks, index, task}) => {

  const [state, setState] = useState(false);
  const [text, setText] = useState(task.text);

  const changeCheckbox = async (index) => {
    //handleChangeCheckbox
    let { _id, isCheck } = data[index];
    await axios.patch("http://localhost:8000/updateTask", {
        _id,
        isCheck: !isCheck,
      })
      .then((res) => {
        setTasks(res.data.data);
      });
  };

  const deleteTask = async (index) => {
    await axios.delete(`http://localhost:8000/deleteTask?_id=${data[index]._id}`).then ((res) => {
      setTasks(res.data.data);
    })
  }

  const saveTask = async (index) => {
    let { _id, isCheck } = data[index];
    await axios.patch("http://localhost:8000/updateTask", {
      _id,
      text,
      isCheck
    }).then((res) => {
      setTasks(res.data.data);
    });
  }

  return (
    <div key={`task-${index}`} >
      <input
        type="checkbox"
        key={`task-${index}`}
        checked={task.isCheck}
        onChange={() => changeCheckbox(index)}
      />
      {(state) 
          ? <>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
            <AddIcon onClick={() => {
                  saveTask(index);
                  setState(false);
              }}/> 
            <CloseIcon onClick={() => setState(false)}/> 
          </>
          : <><span>{task.text}</span>
            <EditIcon onClick={() => setState(true) } /> 
            <DeleteForeverIcon onClick={() => deleteTask(index)}/> 
          </>
          }
     </div>
  )
};

export default TaskComponent;

