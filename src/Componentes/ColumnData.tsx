import React, { useEffect } from 'react'
import { ApexChart }  from "apexcharts"
interface PropsTotla {
            total : any [ ]
}

const ColumnData = ( {  total } :  PropsTotla) => {  
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
            <h1>Hola mundo</h1>
    
    </>
)
}

export default ColumnData