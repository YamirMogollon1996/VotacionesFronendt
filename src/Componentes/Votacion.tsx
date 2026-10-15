import React, { useContext, useEffect, useRef, useState } from 'react'
import Swal from "sweetalert2"
import fujomiri from "../assets/fujimori.jpg"
import trump from "../assets/trump.jpg"
import toledo from "../assets/toledo.jpg"
import Textura from "../assets/PurpleTextura.jpg"
import FormularioEncontrado from './FormularioEncontrado.js'
// import useContexto from '../Contexto/useContexto.js'
import type { Ivotaciones } from "../assets/helpers/data.js"
export interface Props {
    id: number,
    nombre: string,
    partido: string,
    edad: number,
    // propuestas: string[],
    color: string,
    totalvotos: number,
    foto?: string
}
export interface Rback_datos {

    response: Boolean,
    stado: Boolean,
    data: Ivotaciones | string
}
export const candidatos: Props[] = [
    {
        id: 1,
        nombre: "Carlos Mendoza",
        partido: "Partido A",
        edad: 45,
        // propuestas: ["Educación", "Salud", "Seguridad"],
        color: "#97bfbb",
        totalvotos: 0,
        foto: fujomiri


    },
    {
        id: 2,
        nombre: "María Torres",
        partido: "Partido B",
        edad: 39,
        // propuestas: ["Economía", "Empleo", "Transporte"],
        color: "#fcba03",
        totalvotos: 0,
        foto: trump
    },
    {
        id: 3,
        nombre: "Luis Ramírez",
        partido: "Partido C",
        edad: 52,
        // propuestas: ["Infraestructura", "Salud", "Medio ambiente"],
        color: "#e3dbc5",
        totalvotos: 0,
        foto: toledo

    },

    {
        id: 4,
        nombre: "Voto Blanco",
        partido: "Partido C",
        edad: 52,
        // propuestas: ["Infraestructura", "Salud", "Medio ambiente"],
        color: "whiteSmoke",
        totalvotos: 0
    }

];
const Votacion = () => {

    const [resetearform, setResteoForm] = useState(false)
    const formulario = useRef(null)
    const [estado, setuserios] = useState<Props[]>(JSON.parse(localStorage.getItem('usuario')) || candidatos as any)
    const [UsuarioSingle, setUsuarioSingle] = useState<Props | null>(null)
    // const { ActualizarMisdatos, estadoAlumnos } = useContexto()
    const [encontrado, setencontrado] = useState<Rback_datos>({} as Rback_datos)

    const PapersDetalle = (data: Ivotaciones | string, response: Boolean, stado: Boolean) => {
        setencontrado({
            data: data,
            response,
            stado
        })
    }

    const buttonDetlalle = async (item: Props) => {


        console.log(item)
        if (encontrado.stado) {

                console.log('se encontro la data')
            
        }


        // if (!VerelUsuario) alert('error no encontrado')
        // ActualizarMisdatos(VerelUsuario!)
        // console.log(VerelUsuario)
        // if (Object.values(encontrado).length > 0) {
        //     const uptalteClassList = estado.map((vot, index) => {
        //         return vot.id === item.id
        //             ? { ...vot, totalvotos: item.totalvotos += 1 }
        //             : vot
        //     })
        //     setuserios(uptalteClassList as Props[])
        //     Swal.fire({
        //         title: `Voto para ${item.nombre}`,
        //         text: 'Do you want to continue',
        //         icon: 'success',
        //         confirmButtonText: 'Cool'
        //     })

        //     setTimeout(() => {
        //         setencontrado({})
        //         setResteoForm(!resetearform)
        //     }, 1500);
        // } else {
        //     Swal.fire({
        //         title: `Error`,
        //         text: 'Necesitas poner tu dni primero ',
        //         icon: 'error',
        //         confirmButtonText: 'error'
        //     })
        // }


    }
    useEffect(() => {
        if (!estado) {
            setuserios(candidatos)
        }
    }, [])
    if (UsuarioSingle != null) {
        Swal.fire({
            title: `el Ganadro es ${UsuarioSingle.nombre}`,
            icon: "success",
            background: '#fafafa'
        })
    }
    useEffect(() => {
        const encontrarGanador = estado.find((item, index) => item.totalvotos === 3)
        localStorage.setItem('usuario', JSON.stringify(estado))


    }, [estado])


    return (
        <div style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} >
            <FormularioEncontrado
                resetearform={resetearform}
                PapersDetalle={PapersDetalle}
            ></FormularioEncontrado>
            <p>{JSON.stringify(encontrado)}</p>
            <>
                <div className='  grid   grid-cols-1  md:grid-cols-2 lg:grid-cols-4 min-h-screen  justify-center items-center   place-items-center gap-3.5 w-[90vw] mx-auto'>
                    {
                        estado.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        backgroundImage: `url(${item.foto})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover'

                                    }}
                                    onClick={() => buttonDetlalle(item)} className={` 
                              hover:scale-105 
                            box border h-[80vh]   *:
                        ${!encontrado.response ? "blur-xs grayscale" : ""}
                            w-full cursor-pointer rounded-md  relative ${index === 3 ? "text-black" : "text-white"}  text-3xl flex justify-center   flex-col items-center   hover:bg-[${item.color}] duration-300 first-letter:not-even:
                            `}>

                                    <div className='w-full absolute bottom-0 text-center bg-black/35 shadow-2xl text-balance'>
                                        <h1>{item.nombre}</h1>
                                        <h1 className=''>{item.partido}</h1>
                                        <h1>{item.totalvotos}</h1>
                                    </div>

                                </div>

                            )
                        })
                    }
                </div>

            </>
        </div>

    )
}

export default Votacion