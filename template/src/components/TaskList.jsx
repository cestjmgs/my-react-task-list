import { Task } from "./Task"

export const TaskList = (props) => {
    const { list } = props; 

    return (
        <ul>
            {
                list.map((tarea) => (
                <Task name = {tarea.name} />
                ))
            }
        </ul>
    );
}