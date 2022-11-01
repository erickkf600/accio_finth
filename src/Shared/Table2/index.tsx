import React, { useEffect, useState } from 'react'
import './table.scss'

interface input {
    children: React.ReactNode[]
    style?: any
    paginate?: {
        currentPage: number
        itemsPerPage: 5 | 10 | 15 | 25 | 50 | 100
        totalItems: number
        changePage: (e: number) => {}
        changeLimit: (e: number) => {}
    }
}
const Table: React.FC<input> = input => {
    const [page, setPage] = useState<number>(input?.paginate?.currentPage || 1)
    useEffect(() => {
        calcPages()
    }, [])
    useEffect(() => {
        input.paginate?.changePage(page)
    }, [page])

    const calcPages = () => {
        const calc =
            (input?.paginate?.totalItems || 1) /
            (input?.paginate?.itemsPerPage || 1)
        const division =
            (input?.paginate?.totalItems || 1) %
                (input?.paginate?.itemsPerPage || 1) ==
            1
                ? calc
                : calc + 1
        return Math.trunc(division)
    }
    const handleClick = (el: any) => {
        if (el.target.parentElement.tagName === 'TR') {
            el.target.parentElement.classList.toggle('show')
        }
    }

    const changePage = (type: string) => {
        if (type === 'next') setPage(page + 1)
        else setPage(page - 1)
    }

    return (
        <>
            <table className="table" style={input.style}>
                <thead className="table__head">{input.children[0]}</thead>
                <tbody className="table__body">
                    {React.Children.map(input.children, (element: any) => {
                        if (element.key !== 'head') {
                            return React.cloneElement(element, {
                                onClick: handleClick,
                            })
                        }
                    })}
                </tbody>
            </table>

            {!!input?.paginate && (
                <div className="pagination">
                    <div className="pagination__total-items">
                        <p>Itens</p>
                        <select
                            className="edit-input"
                            defaultValue={input?.paginate?.itemsPerPage || 5}
                            onChange={(e: any) => {
                                setPage(1),
                                    input.paginate?.changePage(1),
                                    input?.paginate?.changeLimit(
                                        +e.target.value,
                                    )
                            }}
                            style={{
                                width: '88px',
                                marginLeft: '-9px',
                            }}
                        >
                            {['5', '10', '15', '25', '50', '100'].map(
                                (items: any, i: number) => (
                                    <option value={items} key={i}>
                                        {items}
                                    </option>
                                ),
                            )}
                        </select>
                    </div>
                    <div className="pagination__page">
                        <p>Página</p>
                        <button
                            type="button"
                            disabled={page === 1}
                            className="back icon-arrow-left-s"
                            onClick={() => changePage('back')}
                        ></button>
                        <select
                            className="edit-input"
                            value={page}
                            onChange={(e: any) => {
                                setPage(+e.target.value)
                                input.paginate?.changePage(+e.target.value)
                            }}
                            style={{
                                width: '88px',
                                marginLeft: '-9px',
                            }}
                        >
                            {[...Array(calcPages()).keys()].map(
                                (_, i: number) => (
                                    <option value={i + 1} key={i}>
                                        {i + 1}
                                    </option>
                                ),
                            )}
                        </select>
                        <button
                            type="button"
                            disabled={
                                [...Array(calcPages()).keys()].length === page
                            }
                            className="next icon-arrow-right-s"
                            onClick={() => changePage('next')}
                        ></button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Table
