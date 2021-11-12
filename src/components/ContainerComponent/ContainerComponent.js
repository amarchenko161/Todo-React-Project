import React from "react";
import TaskComponent from "../TaskComponent/TaskComponent";
import "./ContainerComponent.scss";

const ContainerComponent = ({ tasks, setTasks, setTask }) => {
  tasks.sort((a, b) => a.isCheck - b.isCheck);

  return (
    <div className="container-page">
      {tasks.length > 0 &&
        tasks.map((task, index) => (
          <TaskComponent
            key={`task-${index}`}
            data={tasks}
            setTasks={setTasks}
            index={index}
            task={task}
            setTask={setTask}
          />
        ))}
    </div>
  );
};

export default ContainerComponent;
