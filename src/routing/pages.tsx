import { Routes } from '../interfaces/routes.interface'
import { Add, Confi, Home, Users } from './lazy-imports'

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
        path: '/usuarios',
        name: 'Ferramentas',
        icon: 'icon-data',
        component: Users,
    },
    {
        path: '/config',
        name: 'Configurações',
        icon: 'icon-config',
        component: Confi,
    },
]
