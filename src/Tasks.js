import React, {useState, useRef} from 'react'
import './App.css';

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const taskRef = useRef();

    const addTask = () => {
        console.log('Add task button clicked = ' + taskRef.current.value);
        setTasks([...tasks, taskRef.current.value]);
    }

    return (
        <div>
            <h1>Tasks</h1>
            <form>
                <input type="text" id="taskDesc" ref={taskRef} placeholder="Task..." />
                <button type="button" id="taskBtn" onClick={addTask}>Add Task</button>
            </form>
            <label>Show:</label>
            <ul id="filter">
                <li><button type="button" id="taskAll">All</button></li>
                <li><button type="button" id="taskIn">Incomplete</button></li>
                <li><button type="button" id="taskCom">Complete</button></li>
            </ul>
            <table>
                <tbody>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>{tasks.map((value, index) => (
                            <div key={index}>{value}</div>
                        ))}</td>
                        <td><button type="button" id="editBtn">Edit</button></td>
                        <td><button type="button" id="deleteBtn">X</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}