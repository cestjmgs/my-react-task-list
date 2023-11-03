import Header from "./components/Header";
import { TaskList } from "./components/TaskList";

const toDoList = [
  {name: "Hacer el lab de Mongo Atlas"},
  {name: "Vacunar a Amapola"},
  {name: "Ensayar Manda Patibularia"},
  {name: "Inscribirme en el técnico de Artes Escénicas"},
  {name: "Hacer la timeline para el sábado"},
  {name: "Tomar las firmas del Festival de Teatro"},

]
function App() {
  return (
    <div className="App">
      <Header />
      <TaskList list= {toDoList} />
    </div>
  )
}

export default App
