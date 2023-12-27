import { GoTrash } from "react-icons/go";
import { MdEdit, MdLabelImportant } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";


export const Task = (props) => {
    const { id, title, description, status, deleteFromApp, editFromApp  } = props; 

    const [taskEditTitleData, setTaskEditTitleData] = useState("");
    const [taskEditDescriptionData, setTaskEditDescriptionData] = useState("");
    const [changeInfo, setChangeInfo] = useState(true);

    
const handleTaskEditTitleChange = (e) => {
    setTaskEditTitleData(e.target.value)
}

const handleTaskEditDescriptionChange= (e) => {
    setTaskEditDescriptionData(e.target.value)
}

const handleChangeInfo = (e) => {
    setChangeInfo(changeInfo ? false : true)
}

//cuando le doy click al botón de Editar  
const  handleEditClick =() => {
    // e.preventDefault();

    if ( taskEditDescriptionData ) {
        const data = {
            id: id,
            title: title,
            description: taskEditDescriptionData, 
            status: status,
        };
        editFromApp(id, data)
    }
    if ( taskEditTitleData ) {
        const data = {
            id: id,
            title: taskEditTitleData,
            description: description, 
            status: status,
        };
        editFromApp(id, data)
    }
    if ( taskEditTitleData && taskEditDescriptionData ) {
        const data = {
            id: id,
            title: taskEditTitleData,
            description: taskEditDescriptionData, 
            status: status,
        };
        editFromApp(id, data)
    }
    
    //Agrega la tarea con la información


    setTaskEditTitleData("");
    setTaskEditDescriptionData("");
    setChangeInfo(true);
    } 

    const deleteInfo = () => {
        deleteFromApp(id)
    }
    
    /*const editInfo= () => {
        editFromApp(id, tarea)
    }*/

    return (
        <div className="taskBox">  
            
            { changeInfo && 
                <label className="taskBoxOne">
            <h3 className="taskBoxTitle"> {title} </h3> 
            </label>}

            {/* {if(changeInfo) {
                {<label className="taskBoxOne">
                    <h3 className="taskBoxTitle"> {title} </h3> 
                </label>}
            } else {
                {<label>
            <input type="text"
                className="taskInputTitle"   
                value = {taskEditTitleData}
                onChange={handleTaskEditTitleChange} 
                placeholder={title}>
            </input>
            </label>}
            }} */}
            
            { changeInfo && 
                <label className="taskBoxTwo">   
                <p className="taskBoxDescription"> {description} </p>
            </label>}

            { changeInfo && 
                <button className="taskAddButton" type="submit" onClick={handleChangeInfo}> <MdEdit /> </button>}
            
            { ! changeInfo &&
                <label>
            <input type="text"
                className="taskBoxInputTitle"   
                value = {taskEditTitleData}
                onChange={handleTaskEditTitleChange} 
                placeholder={title}>
            </input>
            </label>}

            { ! changeInfo &&
            <label>
            <input type="text"
            className="taskBoxInputDescription"   
            value={taskEditDescriptionData}
            onChange={handleTaskEditDescriptionChange} 
            placeholder={description}>
            </input>

            </label> }
            
            <div className="taskBoxButtons">
            { ! changeInfo &&
                <label>
            <button className="taskButton"
                 onClick={handleEditClick}>
                <FaCheck />
                </button>
 
            </label>} 
            <label>
            <button className="taskButton"
                onClick={deleteInfo}>
                <GoTrash />
                </button>      
            </label>
            </div>
        </div>
    );
}


