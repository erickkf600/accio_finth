import React, { createContext, useContext, useState, useEffect } from 'react'
import { getOperationTypes } from './../http/utils.query'

export const OperationTypes = createContext<{
    operationtypes: { id: number; title: string; full_title: string }[]
}>({
    operationtypes: [],
})

export const OperationTypesProvider = (props: any) => {
    const hasCache = sessionStorage.getItem('operation_types') || '[]'
    const [operationtypes, setOperationtypes] = useState<any[]>(
        JSON.parse(hasCache),
    )
    useEffect(() => {
        if (!operationtypes.length) getOperations()
    }, [hasCache])
    const getOperations = async () => {
        await getOperationTypes()
            .then((res: any) => {
                sessionStorage.setItem('operation_types', JSON.stringify(res))
                setOperationtypes(res)
            })
            .catch((err: any) => {
                console.error(err)
            })
    }
    return (
        <OperationTypes.Provider value={{ operationtypes }}>
            {props.children}
        </OperationTypes.Provider>
    )
}
export default OperationTypesProvider

export const useOperationsTypesContext = () => useContext(OperationTypes)
