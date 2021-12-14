import React, { createContext, useContext, useState, useEffect } from 'react'
import { Users } from '../../interfaces/Users.interface'
import * as response from './../http/app.get'

export const UsersContext = createContext<{
    users: Users[]
}>({
    users: [],
})

export const UsersProvider = (props: any) => {
    const hasUsers = sessionStorage.getItem('users') || '[]'
    const [users, setUser] = useState<any[]>(JSON.parse(hasUsers))
    useEffect(() => {
        if (!users.length) getUsers()
    }, [hasUsers])
    const getUsers = async () => {
        await response
            .getUsers()
            .then((res: any) => {
                sessionStorage.setItem('users', JSON.stringify(res))
                setUser(res)
            })
            .catch((err: any) => {
                console.error(err)
            })
    }
    return (
        <UsersContext.Provider value={{ users }}>
            {props.children}
        </UsersContext.Provider>
    )
}
export default UsersProvider

export const usersContext = () => useContext(UsersContext)
