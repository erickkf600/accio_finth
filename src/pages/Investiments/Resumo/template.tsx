import React from 'react'
import { Doughnut, Bar } from 'react-chartjs-2'
const Template: React.FC<any> = ({ month, chart, bars }: any) => {
    return (
        <section className="resumo">
            <div className="resumo__grid">
                <div className="card resumo__grid-card">
                    <strong>Total Investido</strong>
                    <p>R$ 15.000,00</p>
                </div>
                <div className="card resumo__grid-card">
                    <strong>
                        Total em {month?.full_name?.captalizeCase()}
                    </strong>
                    <p>R$ 15.000,00</p>
                </div>
                <div className="card resumo__grid-card">
                    <strong>Dividendos do mês</strong>
                    <p>R$ 10,20</p>
                </div>
                <div className="card resumo__grid-card">
                    <strong>Total de dividendos</strong>
                    <p>R$ 200,00</p>
                </div>
            </div>

            <div className="resumo__chart">
                <div className="card resumo__chart-bars">
                    <Bar options={bars.options} data={bars.data} />
                </div>
            </div>

            <div className="resumo__chart">
                <div className="card resumo__chart-doughnut">
                    <strong>Alocações</strong>
                    <div className="chart">
                        <div className="resumo__chart-doughnut-size">
                            <Doughnut data={chart} />
                        </div>
                        <div className="resumo__chart-doughnut-labels">
                            <p>FIIs</p>
                            <p>Ações</p>
                            <p>Renda Fixa</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Template
