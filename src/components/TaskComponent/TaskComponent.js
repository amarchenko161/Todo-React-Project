import React, { useState } from "react";
import axios from "axios";
import EditAndDeleteComponents from "../EditAndDeleteComponents/EditAndDeleteComponents";
import AcceptAndCancelComponent from "../AcceptAndCancelComponent/AcceptAndCancelComponent";
import './TaskComponent.scss';

const TaskComponent = ({ data, setTasks, index, task }) => {
  const [state, setState] = useState(false);

  const changeCheckbox = async (index) => {
    const { _id, isCheck } = data[index];
    await axios.patch("http://localhost:8000/updateTask", {
        _id,
        isCheck: !isCheck,
      })
      .then((res) => {
        setTasks(res.data.data);
      });
  }

  return (
    <div key={`task-${index}`} className="div-content">
      <input
        type="checkbox"
        className="checkbox-style"
        key={`task-${index}`}
        checked={task.isCheck}
        onChange={() => changeCheckbox(index)}
      />

      {state ? 
          < AcceptAndCancelComponent 
              data={data}
              setTasks={setTasks}
              index={index}
              setState={setState}
              task={task}
          />
      : 
          <EditAndDeleteComponents
            data={data}
            setTasks={setTasks}
            setState={setState}
            index={index}
            task={task}
          />
      }
    </div>
  )
}

export default TaskComponent;
