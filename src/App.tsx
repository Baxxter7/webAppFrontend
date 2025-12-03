import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Lista } from './components/Lista'
import { NuevoEmpleado } from './components/NuevoEmpleado'
import { EditarEmpleado } from './components/EditarEmpleado'

function App() {


  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Lista />}/>
      <Route path='/nuevoEmpleado' element = {<NuevoEmpleado />}/>
      <Route path='/editarEmpleado/:id' element = {<EditarEmpleado />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
