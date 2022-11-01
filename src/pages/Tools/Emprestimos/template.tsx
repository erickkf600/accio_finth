import React from 'react'
const Template: React.FC = () => {
    return (
        <section>
            <h1>Empréstimos</h1>

            <div className="emprestimo-card">
                <div className="emprestimo-card__head">
                    <span style={{ maxWidth: '80%' }}>
                        <p>
                            Data <strong>27/10/2021</strong>
                        </p>
                        <p>
                            Total <strong>$4200,00</strong>
                        </p>
                        <p>
                            Vencimento <strong>14</strong>
                        </p>
                    </span>

                    <button className="icon-x-circle"></button>
                </div>
                <div className="emprestimo-card__body"></div>
                <div className="emprestimo-card__footer"></div>
            </div>
        </section>
    )
}

export default Template
