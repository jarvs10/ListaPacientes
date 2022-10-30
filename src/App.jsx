import { useState } from "react";
import './App.css'
import Formulario from './Components/Formulario'
import Header from './Components/Header'
import Listapacientes from './Components/Listapacientes'

function App() {

  const [ paciente, setPacientes ] = useState([])
  
  return (
    <>

    <Header/>

    <div className='md:flex md:justify-between'>
      <Formulario
        paciente={paciente}
        setPacientes={setPacientes}
      />
        
      <Listapacientes
        paciente={paciente}
      />
    </div>
    
    </>
  )
}

export default App
