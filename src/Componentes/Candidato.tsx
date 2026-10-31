import React, { useState } from 'react'
import { toast } from 'react-toastify'
import type { Candidato } from "../assets/types/candidatosTipos.ts"   
import { Spinner } from '../components/ui/spinner.tsx'


interface CandidatoFormData {
    nombre: string
    apellido: string
    partidoPolitico: string
    foto: File | null
    votos: number
    activo: boolean,
    edad: number
}

const CLAVE_ACCESO = 'Pass@@123'


const Detalle_Datos: CandidatoFormData = {
    nombre: '',
    apellido: '',
    partidoPolitico: '',
    foto: null,
    votos: 0,
    edad: 0,
    activo: false
}



const Candidato = () => {
    const [formData, setFormData] = useState<CandidatoFormData>(Detalle_Datos)
    const [errors, setErrors] = useState<Partial<Record<keyof CandidatoFormData, string>>>({})
    const [claveCorrecta, setClaveCorrecta] = useState(false)
    const [claveValidada, setClaveValidada] = useState(false) 
    const [  isloading , setisloading ]    = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, files } = event.target

        if (name === 'edad') {
            setFormData(prev => ({ ...prev, edad: Number(value) }))
        }
        if (name === 'foto') {
            setFormData(previous => ({ ...previous, foto: files?.[0] ?? null }))

        } else if (name === 'activo') {
            setFormData(previous => ({ ...previous, activo: checked }))
        } else if (name === 'nombre' || name === 'apellido' || name === 'partidoPolitico') {
            setFormData(previous => ({ ...previous, [name]: value }))
        }
        setErrors(previous => ({ ...previous, [name]: undefined }))
    }
    const validateForm = () => {
        const nextErrors: Partial<Record<keyof CandidatoFormData, string>> = {}
        if (!formData.nombre.trim()) nextErrors.nombre = 'El nombre es obligatorio.'
        else if (formData.nombre.trim().length < 3) nextErrors.nombre = 'El nombre debe tener al menos 3 letras.'
        else if (formData.nombre.trim().length > 30) nextErrors.nombre = 'El nombre no puede superar las 30 letras.'
        else if (/\d/.test(formData.nombre)) nextErrors.nombre = 'El nombre no puede contener números.'
        if (!formData.apellido.trim()) nextErrors.apellido = 'El apellido es obligatorio.'
        else if (formData.apellido.trim().length < 3) nextErrors.apellido = 'El apellido debe tener al menos 3 letras.'
        else if (formData.apellido.trim().length > 30) nextErrors.apellido = 'El apellido no puede superar las 30 letras.'
        else if (/\d/.test(formData.apellido)) nextErrors.apellido = 'El apellido no puede contener números.'
        if (!formData.partidoPolitico.trim()) nextErrors.partidoPolitico = 'El partido político es obligatorio.'
        if (formData.foto && !formData.foto.type.startsWith('image/')) {
            nextErrors.foto = 'Selecciona un archivo de imagen válido.'
        } else if (formData.foto && formData.foto.size > 5 * 1024 * 1024) {
            nextErrors.foto = 'La foto no debe superar los 5 MB.'
        }
        return nextErrors
    }

    const peticionData = async () => { 

   
        console.log(formData)
        let variab = formData.activo ? 1 : 0
        const formDataEnviar = new FormData()
        formDataEnviar.append('nombre', formData.nombre.trim())
        formDataEnviar.append('apellido', formData.apellido.trim())
        formDataEnviar.append('partido', formData.partidoPolitico.trim())
        formDataEnviar.append('votos', String(formData.votos))
        formDataEnviar.append('anio', String(formData.edad))
        formDataEnviar.append('activo', String(variab))

        console.log(formData.edad)
        if (formData.foto) formDataEnviar.append('foto', formData.foto)
        const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/candidato/create`, {
            method: 'POST',
            body: formDataEnviar
        })
        if (!response.ok) {
            throw new Error('No se pudo guardar el candidato.')
        }  
    } 
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
             setisloading(true)
        event.preventDefault()
        const validationErrors = validateForm()
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length > 0) return

        try {
            await peticionData()
            toast.success('Añadido correctamente', { autoClose: 1000 })
            setTimeout(() => {
                setFormData(Detalle_Datos)
            }, 2000)
        } catch {
            toast.error('No se pudo guardar el candidato.')
        } finally {


            setisloading(false)
        }
    }
    return (

        <div className="grid min-h-screen bg-slate-950 lg:grid-cols-[60%_40%]">
            <section className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-8 py-16 text-white sm:px-12 lg:px-20">
                <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
                <div className="relative">
                    <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                        <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_2px_rgba(103,232,249,0.8)]" />
                        Plataforma electoral
                    </span>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Elecciones Escolares</h1>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-blue-100/80">
                        Registra a los candidatos que participarán en la votación. Completa sus datos
                        y agrega una fotografía para que los votantes puedan identificarlos.
                    </p>
                    <label className="mt-8 block max-w-sm text-sm font-medium text-slate-300">
                        Clave de acceso
                        <input
                            type="password"
                            name="clave"
                            placeholder="Ingresa tu clave"
                            onChange={event => {
                                setClaveCorrecta(event.target.value === CLAVE_ACCESO)
                                setClaveValidada(false)
                            }}
                            onBlur={() => setClaveValidada(true)}
                            className="mt-2 block w-full rounded-lg border border-slate-600 bg-slate-900/80 px-3 py-2.5 text-white placeholder:text-slate-500 shadow-inner transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                        />
                        {claveValidada && <span aria-live="polite" className={`mt-2 block text-sm ${claveCorrecta ? 'text-emerald-300' : 'text-red-300'}`}>
                            {claveCorrecta ? 'Clave correcta.' : 'Clave incorrecta.'}
                        </span>}
                    </label>
                    <div className="mt-10 h-px max-w-sm bg-gradient-to-r from-cyan-300/70 to-transparent" />
                </div>
            </section>
            <section className="flex items-center justify-center bg-slate-900 px-5 py-10 sm:px-8">

                {claveCorrecta ? <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="w-full max-w-xl space-y-5 rounded-2xl border border-white/10 bg-slate-800/90 p-6 shadow-[0_0_50px_rgba(8,145,178,0.12)] backdrop-blur-xl sm:p-8"
                >
                    <div className="mb-7 border-b border-white/10 pb-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Nuevo registro</p>
                        <h2 className="mt-2 text-2xl font-semibold text-white">Registrar candidato</h2>
                        <p className="mt-1 text-sm text-slate-400">Completa la información para continuar.</p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block text-sm font-medium text-slate-300">
                            Nombre
                            <input
                                type="text"
                                name="nombre"
                                required
                                maxLength={30}
                                value={formData.nombre || ''}
                                onChange={handleChange}
                                aria-invalid={Boolean(errors.nombre)}
                                className="mt-1 block w-full rounded-lg border border-slate-600 bg-slate-900/80 px-3 py-2.5 text-white shadow-inner transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                            />
                            {errors.nombre && <span className="mt-1 block text-sm text-red-300">{errors.nombre}</span>}
                        </label>
                        <label className="block text-sm font-medium text-slate-300">
                            Apellido
                            <input
                                type="text"
                                name="apellido"
                                required
                                maxLength={30}
                                value={formData.apellido || ''}
                                onChange={handleChange}
                                aria-invalid={Boolean(errors.apellido)}
                                className="mt-1 block w-full rounded-lg border border-slate-600 bg-slate-900/80 px-3 py-2.5 text-white shadow-inner transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                            />
                            {errors.apellido && <span className="mt-1 block text-sm text-red-300">{errors.apellido}</span>}
                        </label>
                    </div>

                    <label className="block text-sm font-medium text-slate-300">
                        Partido político
                        <input
                            type="text"
                            name="partidoPolitico"
                            required
                            value={formData.partidoPolitico || ''}
                            onChange={handleChange}
                            aria-invalid={Boolean(errors.partidoPolitico)}
                            className="mt-1 block w-full rounded-lg border border-slate-600 bg-slate-900/80 px-3 py-2.5 text-white shadow-inner transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                        />
                        {errors.partidoPolitico && <span className="mt-1 block text-sm text-red-300">{errors.partidoPolitico}</span>}
                    </label>
                    <label className="block text-sm font-medium text-slate-300">
                        Edad
                        <input
                            type="number"
                            name="edad"
                            required
                            value={formData.edad || ''}
                            onChange={handleChange}
                            aria-invalid={Boolean(errors.edad)}

                            className="mt-1 block w-full rounded-lg border border-slate-600 bg-slate-900/80 px-3 py-2.5 text-white shadow-inner transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                        />
                        {errors.partidoPolitico && <span className="mt-1 block text-sm text-red-300">{errors.partidoPolitico}</span>}
                    </label>

                    <label className="block text-sm font-medium text-slate-300">
                        Foto
                        <input
                            type="file"
                            name="foto"
                            accept="image/*"
                            onChange={handleChange}
                            aria-invalid={Boolean(errors.foto)}
                            className="mt-1 block w-full rounded-lg border border-slate-600 bg-slate-900/80 text-sm text-slate-300 file:mr-4 file:rounded-md file:border-0 file:bg-cyan-400/10 file:px-4 file:py-2.5 file:font-medium file:text-cyan-300 hover:file:bg-cyan-400/20"
                        />
                        {errors.foto && <span className="mt-1 block text-sm text-red-300">{errors.foto}</span>}
                    </label>
                    <label className="flex items-center gap-3 text-sm font-medium text-slate-300">
                        <input

                            type="checkbox"
                            name="activo"
                            checked={formData.activo || false}
                            onChange={handleChange}
                            className="h-4 outline-0 w-4 rounded border-slate-500 bg-slate-900 text-cyan-400 focus:ring-cyan-400"
                        />
                        Activo
                    </label>

                    <button
                        type="submit"
                        className="w-full cursor-pointer rounded-lg bg-gradient-to-r outline-0 from-cyan-500 to-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-cyan-950/40 transition hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-2  focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-800"
                    >  
                    { !isloading  ? <p>Guardar candidato </p>   :      <Spinner  className='mx-auto' strokeWidth={5}></Spinner>
                   }
                        {/* */}
                   
                    </button>

                </form> : <p className="text-center text-slate-400">Ingresa la clave correcta para mostrar el formulario.</p>}
            </section>
        </div>
    )
}

export default Candidato