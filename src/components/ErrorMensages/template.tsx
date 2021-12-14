import React from 'react'
import selectMount from './../../assets/images/select-mounth.svg'
const Template = ({ type }: { type: string }) => {
    return (
        <>
            {type === 'mounth' ? (
                <section className="select-month">
                    <div className="select-month__text">
                        <h1>Sem dados</h1>
                        <p>
                            Para visualizar as informações cadastradas, é
                            necessário selecionar o mês.
                        </p>
                    </div>
                    <img src={selectMount} alt="Selecione o mês" />
                </section>
            ) : (
                ''
            )}
        </>
    )
}

export default Template
