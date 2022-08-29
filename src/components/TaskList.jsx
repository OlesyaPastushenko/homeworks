import React, { useState } from "react";
import MyButton from "./MyButton";
import '../App.css'
const TaskList = ({taskList, changeTaskList}) =>{
    const Done = (eTarget) => {
        let list = taskList.map(elem =>{
            return elem.id !== eTarget ? elem : {...elem, done: true}
        })
        changeTaskList(list)
        localStorage.setItem('task',JSON.stringify(list))
    }
    return ( 
        <div>
        {taskList?.map((el, index) => 
            <div key = {el.id} id ={el.id} className='task'>
            <div style={{textDecoration: el.done && 'line-through'}} id ={el.id}>{index+1}. {el.title}</div>
            <MyButton id={el.id} onClick = {()=> Done(el.id)}>Done</MyButton>
            </div> 
            )}
        </div>
    
    )

}
export default TaskList