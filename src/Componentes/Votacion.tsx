import React, { useContext, useEffect, useRef, useState } from 'react'
import Swal from "sweetalert2"
import fujomiri from "../assets/fujimori.jpg"
import trump from "../assets/trump.jpg"
import toledo from "../assets/toledo.jpg"
import Textura from "../assets/PurpleTextura.jpg"
import FormularioEncontrado from './FormularioEncontrado.js'
import type { Ivotaciones } from "../assets/helpers/data.js"
import votacionesIcono from "../assets/ImagenRecortada_.png"
import type { Candidato } from "../assets/types/candidatosTipos.ts"
import { User, Menu, Vote, InfoIcon, CalendarIcon, DnaIcon, CheckCircle2, User2Icon, Search, UserGroup, CircleX } from 'lucide-react'
import votacion from "../assets/votacion.svg"
import FondoPantalla from "../assets/fondoazul.jpg"
import VoteNotification from './RegisterVoto.tsx'
import pexel from "../assets/pexel.jpg"
import { ToastContainer, toast } from 'react-toastify'

let color = ['#4FA9A5', '#FAB60E', '#DCCCB4', '#E3E7EF']

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
    data: Ivotaciones
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
        totalvotos: 0,
        foto: votacionesIcono
    }

];
const Votacion = () => {
    const [resetearform, setResteoForm] = useState(false)
    const formulario = useRef(null)
    const [estado, setuserios] = useState<Props[]>(JSON.parse(localStorage.getItem('usuario')) || candidatos as any)
    const [Candidates, setCandidates] = useState<Candidato[]>([])
    const [UsuarioSingle, setUsuarioSingle] = useState<Props | null>(null)
    const [encontrado, setencontrado] = useState<Rback_datos>({} as Rback_datos)
    const PapersDetalle = (data: Ivotaciones, response: Boolean, stado: Boolean) => {
        setencontrado({
            data: data,
            response,
            stado
        })
    }
    const buttonDetlalle = async (item: Props) => {
        if (encontrado.stado) {
            fetch('https://backendvotaciones-production.up.railway.app/addVoto', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(encontrado.data)
            }).then((data) => {
                return data.json()
            }).then((info) => {
                if (info.msg) {
                    toast.success(`Voto emititado ${item.nombre}`, {
                        autoClose: 1000,
                        icon: <CheckCircle2 color='#1A7B3F'></CheckCircle2>,
                        style: {
                            backgroundColor: "#DCFCE7", // verde claro
                            color: "#1A7B3F",           // texto verde oscuro
                        },
                    })
                } else {
                    toast.error(`${info.error}`, {
                        autoClose: 1000,
                        icon: <CircleX color='#e74c3c'></CircleX>,
                        style: {
                            backgroundColor: "#fee2e2",
                            color: "#c0392b",
                        },
                    })
                }
                setTimeout(() => {
                    setencontrado({})
                    setResteoForm(!resetearform)
                }, 1500);
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    const handleClicj = (item: Props) => {
        if (!encontrado.data) {
            toast.error(`necesitas poner tu DNI`, {
                autoClose: 1000,
                icon: <CircleX color='#e74c3c'></CircleX>,
                style: {
                    backgroundColor: "#fee2e2",
                    color: "#c0392b",
                },
            })
        } else {
            console.log('first dato')
            buttonDetlalle(item)

        }

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
        fetch('https://backendvotaciones-production.up.railway.app/candidato/todos').then((data) => {
            return data.json()
        }).then((info) => {
            setCandidates(info)
        }).catch((error) => {
            console.log(error)
        })

    }, [estado])



    return (
        <>

        {/* <p>{JSON.stringify(Candidates)}</p> */}

            <div


                className='
            bg-linear-to-r from-indigo-700 via-indigo-950 to-indigo-700 ...
            min-h-screen top-0 flex items-center justify-center relative '>


                <div className='absolute h-[50%] bg-[#4B238A] w-[25%] blur-2xl rounded-full right-10  bottom-5'></div>
                <div className='absolute h-[50%] bg-[#4B238A] w-[25%] blur-2xl rounded-full left-10  bottom-5'></div>
                <div className='absolute h-[50%] bg-[#4B238A] w-[25%] blur-2xl rounded-full left-10  top-5'></div>
                <div className='absolute h-[50%] bg-[#4B238A] w-[25%] blur-2xl rounded-full right-10  top-5'></div>


                <div className=' border-gray-200  
                rounded-2xl w-[85vw]  mt-5 mx-auto grid grid-cols-[25%_1fr]   min-h-[90vh]'>
                    <div className='p-2   h-14 bg-linear-to-b from-[#fafafa] to-violet-800 min-h-full relative  rounded-l-md   ' >
                        <div className='  w-[90%] mx-auto mt-7 '>
                            <div className='flex items-center'>
                                <Vote size={50} color='#4842D4'></Vote>
                                <h1 className=' text-[#4842D4] font-bold'> -  Elecciones 2025</h1>
                            </div>
                            <h1 className='font-bold  text-2xl lg:text-5xl 2xl:6xl text-indigo-950' >Votaciones</h1>
                            <p className='mx-2 text-3xl mt-4 font-semibold text-[#3424B7]'>Tu voz Cambia</p>
                            <div className='w-[20%] bg-[#3424B7] h-2 rounded-md   mt-4 '></div>
                            <div>
                                <p className='text-[#4952ae] text-xs font-   mt-4'>Selecciona al candidato de tu preferencia y haz que tu voto cuente . Juntos costruimos un futuro mejor. </p>
                            </div>
                            <div className='border bg-indigo-400/10 shadow-2xl  shadow-2xl border-[#3b36ce0c] rounded-sm p-2 rounded-md  flex  mt-4'>

                                <InfoIcon size={30} color='#4842D4'></InfoIcon>
                                <p className='mx-2 text-[#4842D4]  text-xs font-semibold'>Para votart , primero debes encontrar tu registro en el formulario .</p>
                            </div>

                            <img className='mx-auto mt-2' height={200} width={200} src={votacion} ></img>
                            <div className='absolute  top-0 blur-sm rounded-full bg-indigo-400 left-0 w-50  w-50%' >
                                <p>sdfsd</p>
                            </div>
                            <div className='-left-20 absolute -bottom-10 z-20'>
                                <FormularioEncontrado
                                    PapersDetalle={PapersDetalle}
                                    resetearform={resetearform} ></FormularioEncontrado>
                            </div>

                        </div>
                    </div>
                    <div className='flex items-center justify-center relative bg-[#f5f4fd] rounded-r-xl'>

                        <button className='absolute top-4 right-10 border flex p-2 rounded-md bg-[#DBD8FD]  items-end justify-center'>
                            <UserGroup className='mx-2' color='#4E42DA'></UserGroup>
                            <p className='text-[#4E42DA] font-regular'>Total de votos  </p>
                            <span className='font-bold mx-2 text-[#4E42DA]'>0</span>
                        </button>

                        <div className=' h-[80%] bg-gray-50  w-[80%] gap-4 grid grid-cols-2 rounded-lg'>
                            {
                                Candidates.map((item, index) => {
                                    return <div
                                        key={index}
                                        className={`  rounded-md`}>
                                        <div style={{
                                            backgroundImage: `url(${item.foto})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundColor: `#F5F5FA`,
                                            backgroundSize: `${index === 3 ? 'contain' : 'cover'}`,
                                            backgroundPosition: 'top center ',
                                        }}
                                            className={`rounded-md w-full  object-cover   h-[80%] relative border  `}
                                        >
                                            <div className={`${index != 3
                                                ? ' absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent' : ''} 
                                   
                                }     `
                                            }></div>

                                            <div className='absolute bottom-0 w-full p-6 '>
                                                <div className='flex'>
                                                    <div style={{
                                                        backgroundColor: color[index]
                                                    }} className='bg-blue-300 w-4 rounded-md'>
                                                        <p></p>
                                                    </div>
                                                    <div className={`mx-4 ${index != 3 ? 'text-white' : 'text-gray-500'}   font-bold`}>
                                                        <p>{item.nombre}</p>
                                                        <p>{item.partido}</p>
                                                        <div className='flex'>
                                                            <CalendarIcon></CalendarIcon>
                                                            <span className='bloc mx-2'> {item.edad} años</span>
                                                        </div>
                                                        <p>{item.foto}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                borderColor: color[index]
                                            }}
                                            className=' h-[20%]  border-b-2   border-l-2  border-r-2 rounded-md text-center flex items-center  justify-center'>
                                            <button
                                                onClick={() => handleClicj(item)}
                                                style={{
                                                    backgroundColor: color[index]
                                                }}
                                                className={`
                                                    ${index > 2 && "text-black"}
                                                    cursor-pointer
                                                w-[70%] text-white border rounded-full  
                                                flex items-center justify-center p-3`}>
                                                <Vote color={`${index > 1 ? 'gray' : 'white'}`} > </Vote>
                                                <p className={`mx-2 font-bold ${index > 1 && 'text-gray-500 font-bold'}`}>Votar</p>

                                            </button>

                                        </div>

                                    </div>
                                })
                            }

                        </div>



                    </div>

                </div>

            </div>

        </>

    )
}

export default Votacion