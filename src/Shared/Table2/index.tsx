import React from 'react'
import { TableContent } from '../../interfaces/table.interface'
import './table.scss'

interface input {
    children: React.ReactNode[]
    style?: any
}
const Table: React.FC<input> = input => {
    const handleClick = (el: any) => {
        if (el.target.parentElement.tagName === 'TR') {
            el.target.parentElement.classList.toggle('show')
        }
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
        </>
    )
}

export default Table
