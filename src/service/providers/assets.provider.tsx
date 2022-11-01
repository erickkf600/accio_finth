import React, { createContext, useContext, useState, useEffect } from 'react'
import { getAssetsTypes } from './../http/utils.query'

export const AssetsTypes = createContext<{
    assetstypes: { id: number; title: string; full_title: string }[]
}>({
    assetstypes: [],
})

export const AssetsTypesProvider = (props: any) => {
    const hasCache = sessionStorage.getItem('assets_types') || '[]'
    const [assetstypes, setAssetstypes] = useState<any[]>(JSON.parse(hasCache))
    useEffect(() => {
        if (!assetstypes.length) getAssets()
    }, [hasCache])
    const getAssets = async () => {
        await getAssetsTypes()
            .then((res: any) => {
                sessionStorage.setItem('assets_types', JSON.stringify(res))
                setAssetstypes(res)
            })
            .catch((err: any) => {
                console.error(err)
            })
    }
    return (
        <AssetsTypes.Provider value={{ assetstypes }}>
            {props.children}
        </AssetsTypes.Provider>
    )
}
export default AssetsTypesProvider

export const useAssetsTypesContext = () => useContext(AssetsTypes)
