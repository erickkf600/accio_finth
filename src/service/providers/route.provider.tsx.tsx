import React, { createContext, useContext, useState } from 'react'

export const RouteChangeContext = createContext<{
    currentRoute: boolean
    setRoute: any
}>({
    currentRoute: true,
    setRoute: () => {},
})

export const RouteChangeProvider = (props: any) => {
    const [currentRoute, setRoute] = useState<boolean>(true)
    return (
        <RouteChangeContext.Provider value={{ currentRoute, setRoute }}>
            {props.children}
        </RouteChangeContext.Provider>
    )
}
export default RouteChangeProvider

export const routeChangeContext = () => useContext(RouteChangeContext)
