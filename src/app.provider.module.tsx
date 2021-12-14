/* eslint-disable prettier/prettier */
import React from 'react'
import {
    OpenToolBoxProvider,
    SessionStorageProvider,
} from './components/SelectMounth/toggle.provider'
import ResumeProvider from './pages/Add/add.provider'
import CardsProvider from './service/providers/cards.provider'
import MonthsProvider from './service/providers/month.provider'
import UsersProvider from './service/providers/users.provider'
import ConfirmModalProvider from './Shared/MensageBox/toggle.provider'

export const Providers = (input: any) => (
    <MonthsProvider>
    <CardsProvider>
    <UsersProvider>
    <ResumeProvider>
    <ConfirmModalProvider>
    <OpenToolBoxProvider>
    <SessionStorageProvider>
    {input.children}
    </SessionStorageProvider>
    </OpenToolBoxProvider>
    </ConfirmModalProvider>
    </ResumeProvider>
    </UsersProvider>
    </CardsProvider>
    </MonthsProvider>
)
