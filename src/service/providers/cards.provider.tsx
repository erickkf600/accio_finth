import React, { createContext, useContext, useState, useEffect } from 'react'
import { Cards } from '../../interfaces/Cards.interface'
import * as response from './../http/app.get'

export const CardsContext = createContext<{
    cards: Cards[]
}>({
    cards: [],
})

export const CardsProvider = (props: any) => {
    const hasCards = sessionStorage.getItem('cards') || '[]'
    const [cards, setCards] = useState<any[]>(JSON.parse(hasCards))
    useEffect(() => {
        if (!cards.length) getCards()
    }, [hasCards])
    const getCards = async () => {
        await response
            .getCards()
            .then((res: any) => {
                sessionStorage.setItem('cards', JSON.stringify(res))
                setCards(res)
            })
            .catch((err: any) => {
                console.error(err)
            })
    }
    return (
        <CardsContext.Provider value={{ cards }}>
            {props.children}
        </CardsContext.Provider>
    )
}
export default CardsProvider

export const cardsContext = () => useContext(CardsContext)
