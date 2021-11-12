import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./TaskComponent.scss";

const TaskComponent = ({ data, setTasks, index, task, setTask }) => {
  const history = useHistory();
  const { _id, isCheck, text } = task;

  const changeCheckbox = async (index) => {
    await axios
      .patch("http://localhost:8000/updateTask", {
        _id,
        isCheck: !isCheck,
      })
      .then((res) => {
        setTasks(res.data.data);
      });
  };

  const deleteTask = async (index) => {
    await axios
      .delete(`http://localhost:8000/deleteTask?_id=${data[index]._id}`)
      .then((res) => {
        setTasks(res.data.data);
      });
  };

  const editTask = () => {
    setTask(task);
    history.push(`/edit/${task._id}`);
  };

  return (
    <div key={`task-${index}`} className="div-content">
      <input
        type="checkbox"
        className="checkbox-style"
        key={`task-${index}`}
        checked={isCheck}
        onChange={() => changeCheckbox(index)}
      />
      <span
        onDoubleClick={() => editTask()}
        className={isCheck ? "span-style-decor" : "span-style"}
      >
        {text}
      </span>
      <EditIcon
        onClick={() => editTask()}
        className="size-icon"
        visibility={isCheck ? "hidden" : "visible"}
      />
      <DeleteForeverIcon
        onClick={() => deleteTask(index)}
        className="size-icon"
      />
    </div>
  );
};

export default TaskComponent;
