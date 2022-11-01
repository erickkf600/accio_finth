import { Routes } from '../interfaces/routes.interface'
import { Add, Confi, Home, Investiments } from './lazy-imports'

export const Pages: Routes[] = [
    {
        path: '/home',
        name: 'Home',
        icon: 'icon-home',
        component: Home,
    },
    {
        path: '/add-compra',
        name: 'Adicionar Compra',
        icon: 'icon-card',
        component: Add,
    },
    {
        path: '/investimentos',
        name: 'Investimentos',
        icon: 'icon-data',
        component: Investiments,
    },
    {
        path: '/config',
        name: 'Configurações',
        icon: 'icon-config',
        component: Confi,
    },
]
