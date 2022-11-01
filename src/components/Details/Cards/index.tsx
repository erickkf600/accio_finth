import React, { FC } from 'react'
import './cards.scss'

const Cards: FC<any> = input => {
    return (
        <section className="totais">
            <div className="total-cards">
                {input.totalCards.map((el: any, i: number) => (
                    <div key={i} className={`cr ${el.key.replace(/\s/g, '')}`}>
                        <div className="card-content">
                            <p>{el.key.captalizeCase()}</p>
                            <p>
                                {el.data
                                    .sum('instalment_value')
                                    .currency('brl')}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Cards
