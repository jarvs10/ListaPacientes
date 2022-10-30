
function Pacientes({paciente}) {

  const { nombre, email, fecha, sintomas } = paciente;

  return (
    
    <div className="mx-3 bg-white shadow-md px-5 py-10 rounded-xl mb-3">

        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''} <span className="font-normal normal-case">{nombre}</span></p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case">{email}</span></p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: <span className="font-normal normal-case">{fecha}</span></p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="font-normal normal-case">{sintomas}</span></p>

    </div>
  )
}

export default Pacientes