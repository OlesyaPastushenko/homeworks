import React, { useState } from "react";
import Task from "./Task";
import '../App.css'
const TaskList = ({taskList}) =>{
    
    return ( 
        <div>
        {taskList.map((el, index) => 
            <Task key={el.id} value = {el} number = {index+1} id = {el.id}/>
            )}
        </div>
    )

}
export default TaskList