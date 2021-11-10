import React from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const AcceptAndCancelButtonComponent = ({data, text, setTasks, index, setState}) => {
  const saveTask = async (index) => {
    const { _id, isCheck } = data[index];
    await axios
      .patch("http://localhost:8000/updateTask", {
        _id,
        text,
        isCheck,
      })
      .then((res) => {
        setTasks(res.data.data);
      });
  };

  return (
    <>
      <AddIcon
        onClick={() => {
          saveTask(index);
          setState(false);
        }}
      />
      <CloseIcon onClick={() => setState(false)} />
    </>
  );
};

export default AcceptAndCancelButtonComponent;
