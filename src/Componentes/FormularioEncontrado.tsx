import React, { useEffect, useRef, useState } from 'react'
import { Input } from "../components/ui/input.js"
import { Label } from "../components/ui/label.js"
import {  Ivotaciones } from '../assets/helpers/data.js'
import { Search, X, UserRound, IdCard } from "lucide-react"
import { Spinner } from "../components/ui/spinner.tsx"


interface PropsFrom {
    dni: string,
    nombre: string
}
interface PropsFunciton {
    resetearform: Boolean
    PapersDetalle: (item: Ivotaciones, response: Boolean, stado: Boolean) => void
}
const initalStado: PropsFrom = {
    dni: '',
    nombre: ''
}

const intialError = {
    dni: ''
}

const FormularioEncontrado = ({ PapersDetalle
    , resetearform }: PropsFunciton) => {
    const [dni, setdni] = useState<PropsFrom>(initalStado)
    const FormluarioEfecto = useRef<HTMLFormElement>(null)
    const [errores, setErrores] = useState(intialError)
    const [loading, setloading] = useState<Boolean>(false)


    const handleChangue = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value)
    }
    const ResetearFormulario = () => {
        FormluarioEfecto.current?.reset()
        setdni(initalStado)
    }

    const hanldeSubmitEeventForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setloading(true)
        console.log('Buscar datos')
        const { dni: formdatadni } = dni
        fetch("https://backendvotaciones-production.up.railway.app/find", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dni)
        }).then((data) => {
            return data.json()
        }).then((info) => {
            if (info.msg) {
                PapersDetalle("minimo 8 digitos", false, false)
            }
            else if (info.error) {
                setdni({
                    ...dni,
                    nombre: info.error
                })
                // PapersDetalle()  

                console.log('entro al error ')
                PapersDetalle(info.error, false, false)
            } else {


                let inf: Ivotaciones = info
                let nombreocmpleot = `${inf.nombre}  ${inf.apellido_paterno} ${inf.apellido_materno}`
                setdni({
                    ...dni,
                    nombre: nombreocmpleot
                })
                console.log('entro al usuario encontrado ')
                PapersDetalle(info, true, true)
            }
        }).catch((error) => {
            console.log(error)

        }).finally(() => {

            setloading(false)

        })
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (dni.dni.length < 8) {
            setErrores({
                ...errores,
                dni: 'dni incorrecto tiene que ser 8 digitos'
            })
        } else {
            setErrores({
                dni: ''
            })
        }
    }
    const handleChanugeButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        setdni({
            ...dni,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        ResetearFormulario()
    }, [resetearform])
    return (
        <>
            <div className='  bg-[#fdfcfd] my-10 p-4 w-md rounded-lg    shadow-2xl relative' >
                <X color='#453BD8' className='absolute right-5' ></X>
                <div className='flex items-center'>
                    <div className='bg-indigo-600/10 rounded-full  p-4 w-auto'>
                        <Search
                            size={20}
                            strokeWidth={3}
                            color='#453BD8'></Search>
                    </div>
                    <div className='flex-col '>


                        <h1 className='font-bold text-[#171A6B] text-xl mx-2'>Encontar tu Registro</h1>
                        <h1 className='text-indigo-600 mx-2 text-xs' >Ingresa tus datos para continuar con tu voto</h1>

                    </div>
                </div>
                <form onSubmit={hanldeSubmitEeventForm} ref={FormluarioEfecto}>
                    <div className="relative w-full  my-5">
                        <IdCard color='#dadada' className="absolute left-2 top-1  text-gray-500" />
                        <Input
                            maxLength={8}
                            onBlur={handleBlur} onChange={handleChanugeButton}
                            required
                            value={dni.dni}
                            type="text"
                            placeholder='DNI' name='dni'
                            className={`
                                pl-10 text-gray-500  ${ errores.dni != '' ? 'border-2 border-red-500' :'border' } 
                                `} // padding extra para que no se solape con el ícono
                        />
                        <span className='text-red-600 pt-4' >{errores.dni}</span>
                    </div>
                    <div className="relative w-full ">
                        <UserRound color='#dadada' className="absolute left-2 top-1  text-gray-500" />
                        <Input
                            value={dni.nombre || ''} disabled
                            type="text"
                            placeholder="Nombre completo ....."
                            className="pl-10"
                        >
                        </Input>
                    </div>
                    <button

                        disabled={errores.dni != ''}
                        className={`
                        
                        mt-2 flex items-center justify-center w-full h-[50px] border p-3
                    bg-[#5D53DF]
                    ${errores.dni != '' ? 'opacity-45' : ''}
                    text-white rounded-sm cursor-pointer
                        `}>

                        {
                            !loading ?
                                <div className='flex items-center justify-center'>
                                    <Search></Search>
                                    <p className='mx-2 font-semibold '>BUSCAR</p>

                                </div>
                                : <Spinner amplitude={2} strokeWidth={4} ></Spinner>
                        }

                    </button>
                </form>

            </div>
        </>
    )
}

export default FormularioEncontrado