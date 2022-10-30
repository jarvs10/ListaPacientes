import { useState } from "react"
import Error from "./Error";

function Formulario( {paciente, setPacientes } ) {
    
    const [ nombre, setNombre ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ fecha, setFecha ] = useState('');
    const [ sintomas, setSintomas ] = useState('');

    const [ error, setError ] = useState(false);

    function generarId(){
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    function validarCampos(e) {
        e.preventDefault();

        const datos = [ nombre, email, fecha, sintomas ]

        if(datos.includes('')){
            setError(true);
        } else {
            setError(false);

            const objpacientes = {
                nombre,
                email, 
                fecha, 
                sintomas,
                id: generarId()
            }

            setPacientes([...paciente, objpacientes]);

            setNombre('');
            setEmail('');
            setFecha('');
            setSintomas('');
        }
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h1 className="text-2xl font-bold mb-5 text-center">Formulario</h1>


            <form 
            onSubmit={validarCampos}
            className="border py-5 px-3 bg-white">

            {error && <Error mensaje='Todos los campos son obligatorios'/>}
                
                <div>
                    <label htmlFor="nombre" className='block mb-2 px-1'>Nombre</label>
                    <input
                        id="nombre"
                        type="texto" 
                        placeholder="Nombre" 
                        className="py-2 w-full font-normal px-1 mb-2 border-2"
                        value={nombre}
                        onChange= { (e) => setNombre(e.target.value) }
                    />
                </div>
                

                <div>
                    <label htmlFor="email" className='block mb-2 px-1'>Email</label>
                    <input
                        id="email"
                        type="email" 
                        placeholder="Email" 
                        className="py-2 w-full font-normal px-1 mb-2 border-2"
                        value={email}
                        onChange= { (e) => setEmail(e.target.value) }
                    />
                </div>

                <div>
                    <label htmlFor="fecha" className='block mb-2 px-1'>Fecha Nacimiento</label>
                    <input 
                        id="fecha"
                        type="date" 
                        className="py-2 w-full font-normal px-1 mb-2 border-2"
                        value={fecha}
                        onChange= { (e) => setFecha(e.target.value) }
                    />
                </div>

                <div>
                    <label htmlFor="sintomas" className='block mb-2 px-1'>Sintomas</label>
                    <textarea
                        id='sintomas'
                        className='border-2 w-full p-2 placeholder-gray-400 rounded-md mb-5'
                        placeholder='Describe los sintomas'
                        value={sintomas}
                        onChange = { (e) => setSintomas(e.target.value) }
                    ></textarea>
                </div>

                <input 
                    type="submit"
                    value="Agregar Paciente"
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-800 transition-all rounded-md'
                />

            </form>
        </div>
    )
}

export default Formulario