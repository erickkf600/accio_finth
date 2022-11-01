import React from 'react'
import { Debiters } from '../../interfaces/DebitersResponse.interface'

interface homeViewTypes {
    storage: any
    debiters: Debiters[]
    history: any
    getDeleteDebitters: any
}
const HomeView: React.FC<homeViewTypes> = input => (
    <section className="home">
        {!!Object.keys(input.storage).length && (
            <h1>
                Devedores para o mês de{' '}
                <span style={{ textTransform: 'capitalize' }}>
                    {input.storage?.full_name}
                </span>
            </h1>
        )}

        <div className="home__cards">
            {input.debiters.map((el: Debiters, i: number) => (
                <div className="card" key={i}>
                    <div className="card__padding">
                        <div className="card__header">
                            <p>{el.user.name.firstName()}</p>
                            <div className="card__header-actions">
                                <button
                                    onClick={() =>
                                        input.getDeleteDebitters(el.id)
                                    }
                                    className="icon-trash-2"
                                ></button>
                                <button className="icon-check-circle"></button>
                            </div>
                        </div>

                        <div className="card__body">
                            <p>{el.total.currency('brl')}</p>
                            <div className="card__body-ready">
                                <span
                                    className={`card__body-ready-fill
                                ${
                                    el.payed < 30
                                        ? 'card__body-ready-fill--low'
                                        : el.payed < 75
                                        ? 'card__body-ready-fill--medium'
                                        : 'card__body-ready-fill--high'
                                }`}
                                    style={{
                                        width: `${
                                            el.payed === 0 ? 1 : el.payed
                                        }%`,
                                    }}
                                ></span>
                                <p>Pagamento</p>
                                <small>{`${el.payed}%`}</small>
                            </div>
                        </div>

                        <div className="card__footer">
                            <button
                                onClick={() =>
                                    input.history.push(
                                        `/home/${el.user_id}/${input.storage.num}`,
                                    )
                                }
                            >
                                Mais detalhes
                                <span className="icon-arrow-down-s"></span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
)

export default HomeView
