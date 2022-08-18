import React,{ useState } from 'react';
import './App.css';
import MyButton from './components/MyButton';
import MyInput from './components/MyInput';
import TaskList from './components/TaskList';


function App() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const [className, setClassName] = useState("task_text")
  const addNewTask = () => {
    const NewTask = {
      id: Date.now(),
      title: task
    }
    setTaskList([...taskList, NewTask])
    setTask('')
  }

  const changeStyle = (taskNumber) =>{
    console.log()
    console.log(taskNumber)
    setClassName("task_crossed")
  }

  
    return (
      <div>
        <h2>
        Hello!
        </h2>
      <div>
        <MyInput placeholder = 'Is there any job to do?' 
        className = "input" 
        type='text' 
        value = {task} 
        onChange = {(e)=>setTask(e.target.value)}/>
        <MyButton onClick = {addNewTask}>Add Task</MyButton>
        </div>
        <TaskList taskList = {taskList}/>
      </div>
    )
}

export default App;
