import React, { createContext, useContext, useEffect, useState } from 'react'

export const OpenToolBox = createContext<{
    show: boolean
    setShow: Function
}>({
    show: false,
    setShow: () => {},
})

export const OpenToolBoxProvider = (props: any) => {
    const [show, setShow] = useState<boolean>(false)
    return (
        <OpenToolBox.Provider value={{ show, setShow }}>
            {props.children}
        </OpenToolBox.Provider>
    )
}

export const useToolBox = () => useContext(OpenToolBox)

export const SStorage = createContext<{
    selected: any
    setSelected: Function
}>({
    selected: {},
    setSelected: () => {},
})

export const SessionStorageProvider = (props: any) => {
    const getSession = sessionStorage.getItem('mounth-selected') || '{}'
    const [selected, setSelected] = useState<any>(JSON.parse(getSession))
    useEffect(() => {
        if (!!selected) {
            sessionStorage.setItem('mounth-selected', JSON.stringify(selected))
        }
    }, [selected])
    return (
        <SStorage.Provider value={{ selected, setSelected }}>
            {props.children}
        </SStorage.Provider>
    )
}

export const useSessionStorage = () => useContext(SStorage)
