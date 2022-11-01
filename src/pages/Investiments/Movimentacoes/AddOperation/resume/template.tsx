import React from 'react'
import { TableContent } from '../../../../../interfaces/table.interface'
import Table from './../../../../../Shared/Table'
const Template: React.FC<any> = (input: any) => {
    const head: TableContent[] = [
        {
            name: 'Cod',
            key: 'cod',
        },
        {
            name: 'Operação',
            key: 'operation_type_name',
        },
        {
            name: 'Ativo',
            key: 'type_name',
        },
        {
            name: 'Qtd',
            key: 'qtd',
        },
        {
            name: 'Valor Unit.',
            key: 'unity_value',
            currency: true,
        },
        {
            name: 'Taxa',
            key: 'fee',
            currency: true,
        },
        {
            name: 'Total',
            key: 'total',
            currency: true,
        },
    ]
    return (
        <section className="resume-movements">
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
