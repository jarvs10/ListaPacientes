import Pacientes from './Pacientes'

const Listapacientes = ({paciente}) => {

  return (
    <div className="md:w-1/2 lg:w-2/4">
        <h1 className="text-2xl font-bold text-center mb-5">Lista Pacientes</h1>

        {paciente.map( paciente => {
          return <Pacientes
            key={paciente.id}
            paciente={paciente}
          />
        })}
        
    </div>
  )
}

export default Listapacientes