import React, { useEffect } from 'react'
import './header.scss'
import Template from './template'
const Menu: React.FC = () => {
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])

    const listenScrollEvent = () => {
        const header: any = document.querySelector('.header__content')
        if (window.scrollY > 60) {
            header.style.background = 'rgba(255, 255, 255, 0.9)'
        } else {
            header.style.background = 'transparent'
        }
    }
    return (
        <>
            <Template />
        </>
    )
}

export default Menu
