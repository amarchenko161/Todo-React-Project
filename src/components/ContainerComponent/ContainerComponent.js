import React from "react";
import TaskComponent from "../TaskComponent/TaskComponent";

const ContainerComponent = ({ tasks, setTasks }) => {
  return (
    <div>
      {tasks.sort((a,b) =>  a.isCheck - b.isCheck ).map((task, index) => (
        <TaskComponent
          key={`task-${index}`}
          data={tasks}
          setTasks={setTasks}
          index={index}
          task={task}
        />
      ))}
    </div>
  );
};

export default ContainerComponent;
