import React, { useEffect, useRef, useState } from 'react'
import { Input } from "../components/ui/input.js"
import { Label } from "../components/ui/label.js"
import { alumnos, Ivotaciones } from '../assets/helpers/data.js'
interface PropsFrom {
    dni: string,
    nombre: string
}
interface PropsFunciton {
    resetearform: Boolean
    PapersDetalle: (item: Ivotaciones | string, response: Boolean, stado: Boolean) => void
}
const initalStado: PropsFrom = {
    dni: '',
    nombre: ''
}


const FormularioEncontrado = ({ PapersDetalle
    , resetearform }: PropsFunciton) => {
    const [dni, setdni] = useState<PropsFrom>(initalStado)
    const FormluarioEfecto = useRef<HTMLFormElement>(null)
    const handleChangue = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value)
    }
    const ResetearFormulario = () => {
        FormluarioEfecto.current?.reset()
        setdni(initalStado)
    }
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {

        const { dni: formdatadni } = dni
        fetch("https://backendvotaciones-production.up.railway.app/find", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dni)
        }).then((data) => {
            return data.json()
        }).then((info) => {
            // console.log(info)
            if (info.msg) {


                console.log(info.msg)
                PapersDetalle("minimo 8 digitos", false, false)
                //   console.log('entro al msg ')

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
                // console.log( info) 
                console.log('entro al usuario encontrado ')
                PapersDetalle(info, true, true)
            }



        }).catch((error) => {
            console.log(error)

        })
    }
    const handleChanugeButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        setdni({
            ...dni,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        let nuevos_datos = alumnos.map((item, index) => {
            return {
                ...item, voto: 0
            }
        })
    }, [])

    useEffect(() => {
        ResetearFormulario()


    }, [resetearform])
    return (
        <>
            <div className='w-sm   my-10 lg:mb-0  lg:w-lg mx-auto' >
                <form ref={FormluarioEfecto}>
                    <Label className='my-2'>DNI : </Label>
                    <Input className={`${dni.dni.length < 8 ? 'bg-red-50 border-red-200' : ''}  `} maxLength={8} value={dni.dni} onBlur={handleBlur} onChange={handleChanugeButton} placeholder='DNI' name='dni' />
                    <Label className='my-2'>nombre : </Label>
                    <Input value={dni.nombre || ''} disabled />

                </form>

            </div>
        </>
    )
}

export default FormularioEncontrado