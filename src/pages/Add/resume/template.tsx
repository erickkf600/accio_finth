import React from 'react'
import { TableContent } from '../../../interfaces/table.interface'
import Table from './../../../Shared/Table'
const Template: React.FC<any> = (input: any) => {
    const head: TableContent[] = [
        {
            name: 'Nome',
            key: 'buy_name',
        },
        {
            name: 'Usuário',
            key: 'user_name',
        },
        {
            name: 'Valor',
            key: 'value',
        },
        {
            name: 'Cartão',
            key: 'card_name',
        },
        {
            name: 'Parcela',
            key: 'instalments',
        },
    ]
    return (
        <section className="resume">
            <h1>Resumo dos cadastros</h1>
            <Table
                head={head}
                body={input.resume}
                hasDel={true}
                removeSession={input.removeSession}
            />
            <button
                onClick={() => input.submitPurchases()}
                className="btn finish"
            >
                Finalizar
            </button>
        </section>
    )
}

export default Template
