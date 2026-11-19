import React, { useEffect, useState, useRef } from 'react'
import ApexCharts from "apexcharts"
import { UserGroup } from 'lucide-react'


export interface Face {
    nombre: string
    voto: number
}
const Resultados = () => {

    console.log('sfsdf')
    const [total, setTotal] = useState<Face[]>([])
    const [totalV, setTotalV] = useState<number>(0)
    const chartRef = useRef<HTMLDivElement>(null)
    const FechaDatas = async () => {
        try {
            const primero = await fetch(`${import.meta.env.VITE_APP_BACKEND}/candidato/totalvotosNombreVoto`)
            const secundod = await primero.json()
            console.log(secundod)
            setTotal(secundod)
        } catch (error) {
            return error
        }
    }
    useEffect(() => {
        FechaDatas()

    }, [])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_BACKEND}/totalvotos`)
            .then((data) => {
                console.log(data)
                return data.json()

            }).then((info) => {
                const { totalvotos } = info
                setTotalV(totalvotos)
            }).catch((error) => {
                console.log(error)
            })
    }, [])
    useEffect(() => {
       
                   if (!chartRef.current) return
            const chart = new ApexCharts(chartRef.current, {
                colors: ['#4f46e5', '#06b6d4', '#f59e0b', '#10b981', '#ef4444'],
                chart: {
                    type: 'pie',
                    height: 350,
                    background: 'transparent',
                    toolbar: { show: false },
                    fontFamily: 'inherit',
                },
                title: {
                    text: 'Resultados de votación',
                    align: 'left',
                    style: { color: '#1e293b', fontSize: '18px', fontWeight: 600 },
                },
                series: total.map((candidato) => candidato.voto),
                labels: total.map((candidato) => candidato.nombre),
                legend: {
                    position: 'bottom',
                    labels: { colors: '#64748b' },
                },
                dataLabels: { enabled: true },
                stroke: { show: true, width: 1, colors: ['#ffffff'] },
                tooltip: { theme: 'light' },
            })
            chart.render()
            return () => chart.destroy()
        }, [total])
  
    return (
        <>

            {/* <p>Hola mudo</p> */} 
            
            <div className='min-h-screen flex items-center justify-center bg-slate-100'>
                      <button className='absolute top-4 right-10 border flex p-2 rounded-md bg-[#DBD8FD]  items-end justify-center'>
                            <UserGroup className='mx-2' color='#4E42DA'></UserGroup>
                            <p className='text-[#4E42DA]    font-regular'>Total de votos  </p>
                            <span className='font-bold mx-2 text-[#4E42DA]'>{totalV}</span>
                        </button> 
                <div className='w-md lg:w-2xl mx-auto rounded-xl border border-slate-200 bg-white p-5 shadow-sm' ref={chartRef} />
            </div>

        </>
    )
}

export default Resultados