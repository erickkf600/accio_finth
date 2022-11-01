import React, { useEffect, useState } from 'react'
import './movimentacoes.scss'
import Template from './template'
import AddOperation from './AddOperation'
import { getMovementsList } from './../../../service/http/app.get'
import { useSessionStorage } from '../../../components/SelectMounth/toggle.provider'

const Movimentacoes: React.FC = () => {
    const { selected } = useSessionStorage()
    const [add, toggleAdd] = useState<boolean>(false)
    const [total, setTototal] = useState<number>()
    const [content, setContent] = useState<any>([])

    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(5)

    useEffect(() => {
        listMovements()
    }, [page, limit])

    const listMovements = async () => {
        getMovementsList(selected.year, limit, page)
            .then((res: any) => {
                setContent(res?.data)
                setTototal(res?.total)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <>
            <section className="movimentacoes">
                <div className="movimentacoes__head">
                    <h1>Movimentações</h1>
                    <button className="btn" onClick={() => toggleAdd(!add)}>
                        {!add ? 'Adicionar' : 'Fechar'}
                    </button>
                </div>
            </section>
            {add ? (
                <AddOperation
                    closeForm={() => {
                        toggleAdd(false), listMovements()
                    }}
                />
            ) : (
                <Template
                    content={content}
                    total={total}
                    changePage={(e: number) => setPage(e)}
                    changeLimit={(e: number) => setLimit(e)}
                />
            )}
        </>
    )
}

export default Movimentacoes
