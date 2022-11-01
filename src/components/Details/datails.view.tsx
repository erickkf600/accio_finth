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
    register2: any
    handleSubmit: any
    cards: any[]
    add: boolean
    setAdd: any
    sendNewValue: any
    errors: any
    obs: boolean
    showObs: any
    total: number
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
                                        {...input.register(
                                            `list.[${i}].purch_name`,
                                        )}
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
                                        data-currency=""
                                        defaultValue={e.instalment_value}
                                        style={{ width: '88px' }}
                                        {...input.register(
                                            `list.[${i}].purchase_value`,
                                        )}
                                    />
                                    <span hidden={input.edit == i}>
                                        {e.instalment_value.currency()}
                                    </span>
                                </td>
                                <td
                                    data-th="Cartão:"
                                    className={input.edit === i ? 'nopT' : 'pT'}
                                >
                                    <select
                                        hidden={input.edit !== i}
                                        className="edit-input"
                                        defaultValue={e.card_id.toString()}
                                        {...input.register(`list.[${i}].card`)}
                                        style={{
                                            width: '88px',
                                            marginLeft: '-9px',
                                        }}
                                    >
                                        {input.cards.map(
                                            (card: any, i: number) => (
                                                <option value={card.id} key={i}>
                                                    {card.name.captalizeCase()}
                                                </option>
                                            ),
                                        )}
                                    </select>
                                    <span hidden={input.edit == i}>
                                        {e.card_name.captalizeCase()}
                                    </span>
                                </td>
                                <td
                                    data-th="Parcela:"
                                    className={input.edit === i ? 'nopT' : 'pT'}
                                >
                                    <select
                                        hidden={input.edit !== i}
                                        className="edit-input"
                                        defaultValue={e.instalment_num}
                                        {...input.register(
                                            `list.[${i}].purchase_instalment`,
                                        )}
                                        style={{
                                            width: '44px',
                                            marginLeft: '-9px',
                                        }}
                                    >
                                        {[
                                            ...Array(
                                                e.total_instalments,
                                            ).keys(),
                                        ].map((num: number) => (
                                            <option value={num + 1} key={num}>
                                                {num + 1}
                                            </option>
                                        ))}
                                    </select>
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
                                            onClick={() =>
                                                input.handleSubmit(i)
                                            }
                                        ></button>
                                        <button
                                            type="button"
                                            className="icon-x-circle"
                                            onClick={() => input.setEdit(null)}
                                        ></button>
                                        <button
                                            style={{ fontWeight: 'bold' }}
                                            type="button"
                                            className="icon-anticipation"
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

                        <tr
                            hidden={!input.add}
                            className={`new-tr ${input.add && 'show'}`}
                        >
                            <td className="name">
                                <input
                                    defaultValue=""
                                    type="text"
                                    style={{ width: '96%' }}
                                    {...input.register2('purchase_name')}
                                    className={`edit-input ${
                                        !!input.errors.purchase_name && 'error'
                                    }`}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className={`edit-input ${
                                        !!input.errors.purchase_value && 'error'
                                    }`}
                                    {...input.register2('purchase_value')}
                                    data-currency=""
                                    defaultValue=""
                                    style={{ width: '88px' }}
                                />
                            </td>
                            <td>
                                <select
                                    className={`edit-input ${
                                        !!input.errors.card && 'error'
                                    }`}
                                    defaultValue=""
                                    {...input.register2('card')}
                                    style={{
                                        width: '88px',
                                        marginLeft: '-9px',
                                    }}
                                >
                                    <option disabled hidden value="">
                                        selecione
                                    </option>
                                    {input.cards.map((card: any, i: number) => (
                                        <option value={card.id} key={i}>
                                            {card.name.captalizeCase()}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    className={`edit-input ${
                                        !!input.errors.purchase_instalment &&
                                        'error'
                                    }`}
                                    defaultValue=""
                                    {...input.register2('purchase_instalment')}
                                    style={{
                                        width: '44px',
                                        marginLeft: '-9px',
                                    }}
                                >
                                    {[...Array(12).keys()].map(
                                        (num: number) => (
                                            <option value={num + 1} key={num}>
                                                {num + 1}
                                            </option>
                                        ),
                                    )}
                                </select>
                            </td>
                            <td
                                className="action"
                                style={{ textAlign: 'center' }}
                            >
                                <button
                                    title="Adicionar Obs"
                                    onClick={() => input.showObs(!input.obs)}
                                    type="button"
                                    className="icon-info"
                                ></button>
                                <button
                                    onClick={() => input.sendNewValue()}
                                    type="button"
                                    className="icon-check-circle"
                                ></button>
                                <button
                                    onClick={() => input.setAdd(false)}
                                    type="button"
                                    className="icon-x-circle"
                                ></button>
                            </td>
                        </tr>
                    </Table>

                    <span className="total">
                        <b>TOTAL</b>
                        <b>{input.total.currency('brl')}</b>
                    </span>

                    <div
                        className="insert-obs"
                        hidden={!input.add || !input.obs}
                    >
                        <textarea
                            className="edit-input"
                            placeholder="Observação"
                        ></textarea>
                    </div>
                </form>

                <button
                    className="add-button"
                    onClick={() => input.setAdd(true)}
                >
                    Adicionar <span className="icon-add"></span>
                </button>
            </div>
        </div>
    </section>
)

export default DetailsView
