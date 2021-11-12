import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import "./AcceptAndCancelComponent.scss";

const AcceptAndCancelComponent = ({ setTasks, task }) => {
  const [text, setText] = useState(task.text);
  const history = useHistory();

  const saveTask = async () => {
    if (text.trim()) {
      const { _id } = task;
      await axios
        .patch("http://localhost:8000/updateTask", {
          _id,
          text,
        })
        .then((res) => {
          setTasks(res.data.data);
        });
    } else {
      alert("Проверьте заполненность поля");
    }
  };

  const backPage = () => {
    history.push(`/home`);
  };

  return (
    <>
      <input
        type="text"
        value={text}
        className="edit-input-style"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="icon-style">
        <AddIcon
          onClick={() => {
            saveTask();
            backPage();
          }}
          className="size-icon"
        />
        <CloseIcon className="size-icon" onClick={() => backPage()} />
      </div>
    </>
  );
};

export default AcceptAndCancelComponent;
