import React, { useState, useEffect } from "react";
import '../App.css'
import MyButton from "./MyButton";
const Task = ({value , number , id}) => {
  const [crossed, setCrossed] = useState('task_text');
  const textCrossed = (eTarget) => {
    id == eTarget ? setCrossed('task_crossed') : setCrossed('task_text')
  }
 
    return (
        <div className='task'>
        <div className={crossed} id ={id}>{number}. {value.title}</div>
        <MyButton id={id} onClick = {(e)=>textCrossed(e.target.id)}>Done</MyButton>
      </div> 
    )

}
export default Task