import React,{ useState, useEffect } from 'react';
import './App.css';
import MyButton from './components/MyButton';
import MyInput from './components/MyInput';
import TaskList from './components/TaskList';
import Header from './components/Header';


function App() {
  const [currentUserName, setCurrentUserName] = useState('')
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const [userName, setUserName] = useState('')
  const addNewTask = () => {
    const NewTask = {
      id: Date.now(),
      title: task,
      done: false,
      name: userName
    }
    setTaskList([...taskList, NewTask])
    setTask('')
    localStorage.setItem('task',JSON.stringify(taskList))
  }


  


  const checkName = () => {
    let curUserName = localStorage.getItem('name')
    console.log(curUserName)
    if (curUserName===userName) {setCurrentUserName(curUserName)
    setTaskList(JSON.parse(localStorage.getItem('task')))}
    else {
    setCurrentUserName(userName)
    localStorage.setItem('name', userName)
    localStorage.setItem('task', [])
    setTaskList([])
  }
  }

  
    return (
      <div>
        <Header cName = {currentUserName}></Header>
      <div>
        <MyInput placeholder = "What's your name, darling?"
        className = "input" 
        type='text' 
        value = {userName} 
        onChange = {(e) => setUserName(e.target.value)}
        ></MyInput>
        <MyButton onClick = {checkName}>Register</MyButton>
      </div>
      <div>
        <MyInput placeholder = 'Is there any job to do today?' 
        className = "input" 
        type='text' 
        value = {task} 
        onChange = {(e)=>setTask(e.target.value)}/>
        <MyButton onClick = {addNewTask}>Add Task</MyButton>
        </div>
        <TaskList taskList = {taskList} changeTaskList = {setTaskList}/>
      </div>
    )
}

export default App;
