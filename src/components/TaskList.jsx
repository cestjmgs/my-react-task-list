import { Task } from "./Task"

export const TaskList = (props) => {
    const { list, deleteTask, editTask } = props; 

    const handleDelete = (id) => {
        deleteTask(id)
    }
    const handleEdit= (id, tarea) => {
        editTask(id, tarea)
    }

    return (
        <ul>
            {
                list.map((tarea, index) => (
                <Task 
                key={ index }
                id={ tarea?.id }
                title = { tarea?.title } 
                description = { tarea?.description }
                status = { tarea?.status }
                deleteFromApp = { handleDelete }
                editFromApp = {handleEdit} />
                ))
            }
        </ul>
    );
}