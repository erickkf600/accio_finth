import React from 'react'
import { Purchases } from '../../interfaces/PurchasesResponse.interface'
import { Users } from '../../interfaces/Users.interface'
import Table from './../../Shared/Table2'

interface datailsViewTypes {
    users: Users[]
    userid: number
    detail: Purchases[]
    edit: number | undefined
    setEdit: any
    register: any
    handleSubmit: any
}
const DetailsView: React.FC<datailsViewTypes> = input => (
    <section className="datails">
        <h1>
            Detalhes das compras de{' '}
            {input.users.find(u => u.id === input.userid)?.name.firstName()}
        </h1>

        <div className="card">
            <div className="card__padding">
                <form>
                    <Table>
                        <tr key="head">
                            <th style={{ width: '24%' }}>Nome Compra</th>
                            <th style={{ width: '2%', paddingLeft: '31px' }}>
                                Valor
                            </th>
                            <th style={{ width: '3%' }}>Cartão</th>
                            <th style={{ width: '2%', paddingLeft: '2px' }}>
                                Parcela
                            </th>
                            <th style={{ width: '5%', textAlign: 'center' }}>
                                Ação
                            </th>
                        </tr>

                        {input.detail.map((e: Purchases, i: number) => (
                            <tr key={i}>
                                <td
                                    className="name"
                                    style={{
                                        padding: `${
                                            input.edit === i
                                                ? '0 15px'
                                                : '19px 15px'
                                        }`,
                                    }}
                                >
                                    <input
                                        hidden={input.edit !== i}
                                        defaultValue={e.buy_name}
                                        type="text"
                                        style={{ width: '96%' }}
                                        className="edit-input"
                                        {...input.register('purchase_name')}
                                    />
                                    <span hidden={input.edit == i}>
                                        {e.buy_name.captalizeCase()}
                                    </span>
                                </td>
                                <td
                                    className="value"
                                    style={{
                                        padding: `${
                                            input.edit === i
                                                ? '0 15px'
                                                : '19px 15px'
                                        }`,
                                    }}
                                >
                                    <input
                                        hidden={input.edit !== i}
                                        type="text"
                                        className="edit-input"
                                        defaultValue=""
                                        style={{ width: '88px' }}
                                        {...input.register('purchase_value')}
                                    />
                                    <span hidden={input.edit == i}>
                                        {e.instalment_value.currency()}
                                    </span>
                                </td>
                                <td
                                    data-th="Cartão:"
                                    style={{
                                        padding: `${
                                            input.edit === i
                                                ? '0 15px'
                                                : '19px 15px'
                                        }`,
                                    }}
                                >
                                    <input
                                        hidden={input.edit !== i}
                                        type="text"
                                        className="edit-input"
                                        defaultValue=""
                                        {...input.register('card')}
                                        style={{
                                            width: '88px',
                                            marginLeft: '-9px',
                                        }}
                                    />
                                    <span hidden={input.edit == i}>
                                        {e.card.name.captalizeCase()}
                                    </span>
                                </td>
                                <td
                                    data-th="Parcela:"
                                    style={{
                                        padding: `${
                                            input.edit === i
                                                ? '0 15px'
                                                : '19px 15px'
                                        }`,
                                    }}
                                >
                                    <input
                                        hidden={input.edit !== i}
                                        type="text"
                                        className="edit-input"
                                        defaultValue=""
                                        {...input.register(
                                            'purchase_instalment',
                                        )}
                                        style={{
                                            width: '44px',
                                            marginLeft: '-9px',
                                        }}
                                    />
                                    <span hidden={input.edit == i}>
                                        {e.instalment_num} -{' '}
                                        {e.total_instalments}
                                    </span>
                                </td>

                                {input.edit == i ? (
                                    <td
                                        className="action"
                                        style={{ textAlign: 'center' }}
                                    >
                                        <button
                                            type="button"
                                            className="icon-check-circle"
                                            onClick={() => input.handleSubmit()}
                                        ></button>
                                        <button
                                            type="button"
                                            className="icon-x-circle"
                                            onClick={() => input.setEdit(null)}
                                        ></button>
                                    </td>
                                ) : (
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
                                )}
                            </tr>
                        ))}
                    </Table>
                </form>
            </div>
        </div>
    </section>
)

export default DetailsView
