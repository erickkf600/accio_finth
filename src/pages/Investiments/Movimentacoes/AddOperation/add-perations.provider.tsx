import React, { createContext, useContext, useState } from 'react'

export const ResumeMovimentacaoContext = createContext<{
    resumeMovements: any[]
    setMovementsResume: any
}>({
    resumeMovements: [],
    setMovementsResume: () => {},
})

export const ResumeMovimentacaoProvider = (props: any) => {
    const getMovementsResume: Array<any> = JSON.parse(
        sessionStorage.getItem('pre-register-movimentacao') || '[]',
    )
    const [resumeMovements, setMovementsResume] =
        useState<any>(getMovementsResume)
    return (
        <ResumeMovimentacaoContext.Provider
            value={{ resumeMovements, setMovementsResume }}
        >
            {props.children}
        </ResumeMovimentacaoContext.Provider>
    )
}
export default ResumeMovimentacaoProvider

export const useResumeMovementsContext = () =>
    useContext(ResumeMovimentacaoContext)
