import React, { useEffect, useState, useRef } from 'react'
import ApexCharts from "apexcharts"

export const LisTenerHtps = {
    ruta: `https://backendvotaciones-production.up.railway.app`
}

export interface Face {
    nombre: string
    voto: number
}
const Resultados = () => {
    const [total, setTotal] = useState<Face[]>([])
    const chartRef = useRef<HTMLDivElement>(null)
    const FechaDatas = async () => {
        try {
            let primero = await fetch('https://backendvotaciones-production.up.railway.app/candidato/totalvotosNombreVoto')
            let secundod = await primero.json()
            setTotal(secundod)
        } catch (error) {
            return error
        }
    }
    useEffect(() => {
        FechaDatas()
    }, [])

    useEffect(() => {
        if (!chartRef.current) return

        const chart = new ApexCharts(chartRef.current, {
            colors: ['#4f46e5'],
            chart: {
                type: 'bar',
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
            series: [{
                name: 'Votos',
                data: total.map((candidato) => candidato.voto),
            }],
            xaxis: {
                categories: total.map((candidato) => candidato.nombre),
                labels: { style: { colors: '#64748b' } },
                axisBorder: { color: '#e2e8f0' },
                axisTicks: { color: '#e2e8f0' },
            },
            yaxis: {
                labels: { style: { colors: '#64748b' } },
            },
            grid: {
                borderColor: '#e2e8f0',
                strokeDashArray: 4,
            },
            dataLabels: { enabled: false },
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 6,
                    columnWidth: '50%',
                },
            },
            stroke: { show: true, width: 1, colors: ['#ffffff'] },
            tooltip: { theme: 'light' },
        })

        chart.render()
        return () => chart.destroy()
    }, [total])

    return (
        <>
            <div className='min-h-screen flex items-center justify-center bg-slate-100'>

                <div className='w-md lg:w-2xl mx-auto rounded-xl border border-slate-200 bg-white p-5 shadow-sm' ref={chartRef} />

            </div>

        </>
    )
}

export default Resultados