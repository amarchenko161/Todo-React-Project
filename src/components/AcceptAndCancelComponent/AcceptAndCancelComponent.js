import React, { useState } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const AcceptAndCancelComponent = ({data, setTasks, index, setState, task}) => {
  const [text, setText] = useState(task.text);

  const saveTask = async (index) => {
    const { _id, isCheck } = data[index];
    await axios.patch("http://localhost:8000/updateTask", {
      _id,
      text,
      isCheck,
    })
    .then((res) => {
      setTasks(res.data.data);
    });
  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <AddIcon
        onClick={() => {
          saveTask(index);
          setState(false);
        }}
      />
      <CloseIcon onClick={() => setState(false)} />
    </>
  );
}

export default AcceptAndCancelComponent;
