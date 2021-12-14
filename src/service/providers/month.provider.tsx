import React, { createContext, useContext, useState, useEffect } from 'react'
import * as response from './../http/app.get'

export const MonthContext = createContext<{
    months: { title: string; num: number; full_name: string }[]
}>({
    months: [],
})

export const MonthsProvider = (props: any) => {
    const hasMonths = sessionStorage.getItem('months') || '[]'
    const [months, setMounth] = useState<any[]>(JSON.parse(hasMonths))
    useEffect(() => {
        if (!months.length) getMonths()
    }, [hasMonths])
    const getMonths = async () => {
        await response
            .getMonths()
            .then((res: any) => {
                sessionStorage.setItem('months', JSON.stringify(res))
                setMounth(res)
            })
            .catch((err: any) => {
                console.error(err)
            })
    }
    return (
        <MonthContext.Provider value={{ months }}>
            {props.children}
        </MonthContext.Provider>
    )
}
export default MonthsProvider

export const useMonths = () => useContext(MonthContext)
