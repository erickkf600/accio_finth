import React from 'react'
import Table from './../../../Shared/Table2'
const Template: React.FC<any> = input => {
    return (
        <section className="movimentacoes">
            <div className="card movimentacoes__card">
                <div className="card__padding">
                    <form>
                        <Table
                            paginate={{
                                currentPage: 1,
                                itemsPerPage: 5,
                                totalItems: input.total,
                                changePage: (e: number) => input.changePage(e),
                                changeLimit: (e: number) =>
                                    input.changeLimit(e),
                            }}
                        >
                            <tr key="head">
                                <th>Cod.</th>
                                <th>Operação</th>
                                <th>Ativo</th>
                                <th>Qtd</th>
                                <th>Valor Unit.</th>
                                <th>Taxa</th>
                                <th>Data</th>
                                <th>Total</th>
                                <th>Ação</th>
                            </tr>

                            {input.content.map((res: any, i: number) => (
                                <tr key={i}>
                                    <td>{res?.cod}</td>
                                    <td>{res?.type_operation.title}</td>
                                    <td>{res?.type.title}</td>
                                    <td>{res?.qtd}</td>
                                    <td>{res?.unity_value.currency('brl')}</td>
                                    <td>{res?.fee.currency('brl')}</td>
                                    <td>{res?.date_operation}</td>
                                    <td>{res?.total.currency('brl')}</td>
                                    <td
                                        className="action"
                                        style={{ textAlign: 'center' }}
                                    >
                                        <button
                                            type="button"
                                            className="icon-info"
                                        ></button>
                                        <button
                                            type="button"
                                            className="icon-edit"
                                            onClick={() => input.setEdit(i)}
                                        ></button>
                                        <button
                                            type="button"
                                            className="icon-trash-2"
                                        ></button>
                                    </td>
                                </tr>
                            ))}
                        </Table>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Template
