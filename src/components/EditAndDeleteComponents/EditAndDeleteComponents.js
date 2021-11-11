import React from 'react'
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const EditAndDeleteComponents = ({ data, setTasks, setState, index, task }) => {

  const deleteTask = async (index) => {
    await axios
      .delete(`http://localhost:8000/deleteTask?_id=${data[index]._id}`)
      .then((res) => {
        setTasks(res.data.data);
      });
  }

  return (
    <>
    <span onDoubleClick={() => setState(true)}>{task.text}</span>
    <EditIcon onClick={() => setState(true)} />
    <DeleteForeverIcon onClick={() => deleteTask(index)} />
    </>
  )
}

export default EditAndDeleteComponents