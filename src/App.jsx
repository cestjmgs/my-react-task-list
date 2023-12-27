import Header from "./components/Header";
import FirstHeader from "./components/FirstHeader";
import { TaskList } from "./components/TaskList";
import { useEffect, useState } from "react";


function App() {

  const [newTask, setNewTask] = useState([])

  useEffect(() => {
    const localStorageData = localStorage.getItem('tasks');
    if (localStorageData) 
    {const storedTasks = JSON.parse(localStorageData);

    setNewTask(storedTasks)}
  },[])


  const addTask = (data) => {
    setNewTask([...newTask, data])
    localStorage.setItem('tasks', JSON.stringify([...newTask, data]))
  }

  const deleteTask = (id) => {
    const deleteTasksCopy = [...newTask]
    const deleteTasks = deleteTasksCopy.findIndex( (tarea) => tarea.id === id )
    if (deleteTasks || deleteTasks === 0) {
      deleteTasksCopy.splice( deleteTasks, 1)
    }; 
    setNewTask(deleteTasksCopy);
    localStorage.setItem('tasks', JSON.stringify(deleteTasksCopy))
  }

  const editTask = (id, tarea) => {
    const editTasksCopy = [...newTask]
    const editTasksIndex = editTasksCopy.findIndex( (tarea) => tarea.id === id )
    if (editTasksIndex || editTasksIndex === 0) {
      editTasksCopy [editTasksIndex] = {...editTasksCopy[editTasksIndex], ...tarea }
    }; 
    setNewTask(editTasksCopy);
    localStorage.setItem('tasks', JSON.stringify(editTasksCopy))
  }

  return (
    <div className="App">
      <FirstHeader />
      <Header addTask = {addTask} />
      <TaskList 
      list= {newTask}
      deleteTask = {deleteTask}
      editTask = {editTask} />
    </div>
  )
}

export default App
