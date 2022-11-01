import React, { useEffect } from 'react'
import Template from './template'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    BarElement,
    LinearScale,
    CategoryScale,
} from 'chart.js'
import './resumo.scss'
import { months } from './../../../mocks/months'
import { dataMock } from '../../../mocks/data.mock'
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip)

const Resumo: React.FC<any> = input => {
    //TODO COMPONENTIZAR CHARTS
    const monthLabel = months.map((el: any) => el.title)
    const dataTrated = () => {
        return dataMock.map((el: any) => {
            const monthIndex = el.data.split('/')[1] - 1
            return Object.assign(el, {
                NovoValor: el.valor == 0 ? 0.02 : Math.abs(el.valor),
                label: monthLabel[monthIndex],
                ano: el.data.split('/').at(-1),
            })
        })
    }
    const labelsTooltip = (tooltipItems: any) => {
        return `${tooltipItems.raw.valor}%`
    }
    const data: any = {
        labels: ['FIIs', 'Ações', 'Renda Fixa'],
        datasets: [
            {
                data: [12, 19, 50],
                backgroundColor: ['#00A7D7', '#1BAA9C', '#3E1191'],
            },
        ],
    }
    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                displayColors: false,
                callbacks: {
                    title: () => 'Índice',
                    label: labelsTooltip,
                },
            },
        },
        parsing: {
            xAxisKey: 'label',
            yAxisKey: 'NovoValor',
        },
        scales: {
            y: {
                grid: {
                    borderWidth: 2,
                    borderColor: '#000',
                    borderDash: [5],
                },
                ticks: {
                    display: false,
                    beginAtZero: true,
                },
            },
            x: {
                grid: {
                    borderWidth: 2,
                    borderColor: '#000',
                    display: false,
                },
            },
        },
    }

    const dataBars: any = {
        labels: monthLabel,
        datasets: [
            {
                data: dataTrated(),
                backgroundColor: dataMock.map((el: any) => {
                    return el.valor < 0 ? '#d93b3b' : '#539dcf'
                }),
                datalabels: {
                    anchor: 'end',
                    align: 'start',
                    opacity: 0.7,
                    color: '#fff',
                    padding: {
                        top: 8,
                    },
                    font: {
                        weight: 'bold',
                    },
                    formatter: (val: any) => {
                        return Math.abs(val.NovoValor) < 0.1
                            ? null
                            : `${val.valor}%`
                    },
                },
            },
        ],
    }
    return (
        <Template
            month={input.month}
            chart={data}
            bars={{ options: options, data: dataBars }}
        />
    )
}

export default Resumo
