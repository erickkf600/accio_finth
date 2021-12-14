import React, { createContext, useContext, useState } from 'react'

export const ConfirmModal = createContext<{
    confirmModal: boolean
    setConfirmModal: any
}>({
    confirmModal: false,
    setConfirmModal: () => {},
})

export const ConfirmModalProvider = (props: any) => {
    const [confirmModal, setConfirmModal] = useState<boolean>(false)
    return (
        <ConfirmModal.Provider value={{ confirmModal, setConfirmModal }}>
            {props.children}
        </ConfirmModal.Provider>
    )
}
export default ConfirmModalProvider

export const useConfirmBoxContext = () => useContext(ConfirmModal)
