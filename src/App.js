import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {actions} from "./actions/todo";

const App = () => {
  const [task, updateTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector(state => state);

  const handleInputChange = event => {
    updateTask(event.target.value)
  }

  const handleInputTasks = () => {
    dispatch(actions.addTask(task));
    updateTask("");
  }

  return (
    <>
    <form>
      <input type="text" value={task} onChange={handleInputChange} />
      <button type="button" onClick={handleInputTasks}>Add</button>
    </form>

    <ul>
     {
       tasks.map((t, i) => {
         return <li key={i}>{t}</li>
       })
     }
    </ul>
    </>
  );
}
export default App;
