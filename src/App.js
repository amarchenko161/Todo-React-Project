import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import NewTaskComponent from "./components/NewTaskComponent/NewTaskComponent";
import ContainerComponent from "./components/ContainerComponent/ContainerComponent";
import AcceptAndCancelComponent from "./components/AcceptAndCancelComponent/AcceptAndCancelComponent";
import "./App.scss";

const App = (props) => {
  const [tasks, setTasks] = useState([]);
  const history = useHistory();
  const [currentTask, setTask] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8000/allTasks").then((res) => {
      setTasks(res.data.data);
    });
  }, []);

  return (
    <div className="main">
      <header>
        <h1 className="title">To do list</h1>
        <NewTaskComponent data={tasks} setTasks={setTasks} />
      </header>
      <Switch>
        <Route path="/home">
          <ContainerComponent
            tasks={tasks}
            setTasks={setTasks}
            setTask={setTask}
          />
        </Route>
        <Route path="/edit/:id">
          <AcceptAndCancelComponent setTasks={setTasks} task={currentTask} />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
};
export default App;
