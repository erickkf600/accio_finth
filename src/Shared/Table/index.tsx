import React from 'react'
import { TableContent } from '../../interfaces/table.interface'
import { useConfirmBoxContext } from '../MensageBox/toggle.provider'
import './table.scss'

interface input {
    head: TableContent[]
    body: any[]
    hasDel: boolean
    removeSession?: any
}
const Table: React.FC<input> = input => {
    const { setConfirmModal } = useConfirmBoxContext()
    return (
        <>
            <table className="table">
                <thead className="table__head">
                    <tr>
                        {input.head.map((el: TableContent, i: number) => (
                            <th key={i}>{el.name}</th>
                        ))}
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    {input.body.map((el: any, index: number) => (
                        <tr key={index}>
                            {input.head.map((h: TableContent, ii: number) => (
                                <td key={ii}>
                                    {h?.currency && 'R$ '}
                                    {el[h.key]}
                                </td>
                            ))}
                            {input.hasDel && (
                                <td className="delete-section">
                                    <button
                                        className="icon-trash-2 delete"
                                        onClick={() =>
                                            input.removeSession(index)
                                        }
                                    ></button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* input.removeSession(i) */}

            <ul className="table-mobile">
                <li>
                    <div className="table-mobile__head">
                        <p>Nome compra</p>
                        <span>
                            <small>R$ 19.00</small>
                            <small>Nubank</small>
                        </span>
                    </div>

                    <div className="table-mobile__content">
                        <p>
                            Usuário: <strong>Erick</strong>
                        </p>
                        <p>
                            Parcelas: <strong>1 - 3</strong>
                        </p>

                        <button className="icon-trash-2 delete"></button>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Table
