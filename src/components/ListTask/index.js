import React, {useContext} from "react";
import { ContextTask } from "store/context";

const ListTask = () => {
    const {task, setTask} = useContext(ContextTask)
    const onClickTask = (id) => {
        let list = task.map(elem => {
            return elem.id !== id ? elem : {...elem, check: true}
        })
        setTask(list)
    }
    return (
        <ul>
            {task?.map(elem => (
               <li
                  onClick={() => onClickTask(elem.id)}
                  style={{textDecoration: elem.check && "line-through"}}
                  key={elem.id}
               >{elem.title}</li>
            ))}
        </ul>
    )
}

export default ListTask;
