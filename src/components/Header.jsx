import { useState } from "react";
import { v4 as uuidv4 } from "uuid";



const Header = (props) =>{
    const {addTask} = props;

    const [taskTitleData, setTaskTitleData] = useState("")
    const [taskDescriptionData, setTaskDescriptionData] = useState("")


const handleTaskTitleChange = (e) => {
    setTaskTitleData(e.target.value)
}

const handleTaskDescriptionChange= (e) => {
    setTaskDescriptionData(e.target.value)
}

//cuando le doy click al botón de Add Task    
const  handleClick =(e) => {
    e.preventDefault();
    const data = {
        id: uuidv4(),
        title: taskTitleData,
        description: taskDescriptionData, 
        status: false,
    };
    //Agrega la tarea con la información
    addTask(data)

    setTaskTitleData("");
    setTaskDescriptionData("");
    } 
    return (
        <form className="taskForm">
            <div className="taskFormBox">
            <h3 className="taskTitle"> Let's get things done today!  </h3>
            </div>
            <div className="taskFormBoxTwo">
            <input type="text"
            className="taskInputTitle"   
            value = {taskTitleData}
            onChange={handleTaskTitleChange} 
            placeholder="What is the task today?">
            </input>

            <input type="text"
            className="taskInputDescription"   
            value={taskDescriptionData}
            onChange={handleTaskDescriptionChange} 
            placeholder="Give a little description of your task...">
            </input>
            
            <button className="taskAddButton" type="submit" onClick={handleClick}>Add Task</button>
            </div>
        </form>
    );
}

export default Header;