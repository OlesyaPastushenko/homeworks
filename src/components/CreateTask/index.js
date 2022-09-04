import React, {useContext, useState} from "react";
import { ContextTask } from "store/context";

const CreateTask = () => {
    const [val, setVal] = useState('')
    const {task, setTask} = useContext(ContextTask)
    const onCreateTask = () => {
        let data = {
            title: val,
            check: false,
            id: Date.now()
        }
        setTask([
            ...task,
            ...[data]
        ])
        setVal('')
    }
    return (
        <div>
            <input
                value={val}
                onChange={(e) => setVal(e.target.value)}
                type="text"
            />
            <button onClick={onCreateTask}>create</button>
        </div>
    )
}

export default CreateTask;
