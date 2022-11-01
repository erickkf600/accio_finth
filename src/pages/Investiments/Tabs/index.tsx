import React from 'react'
import './tabs.scss'
import { NavLink } from 'react-router-dom'
const Tabs: React.FC = () => {
    return (
        <section className="sub-side-nav">
            <nav className="sub-side-nav__list">
                <NavLink to="/investimentos/resumo" activeClassName="active">
                    Resumo
                </NavLink>
                <NavLink
                    to="/investimentos/movimentacoes"
                    activeClassName="active"
                >
                    Movimentações
                </NavLink>
                <NavLink to="/investimentos/carteira" activeClassName="active">
                    Carteira
                </NavLink>
                <NavLink
                    to="/investimentos/dividendos"
                    activeClassName="active"
                >
                    Dividendos
                </NavLink>
                <NavLink
                    to="/investimentos/estimativas"
                    activeClassName="active"
                >
                    Estimativas
                </NavLink>
            </nav>
        </section>
    )
}

export default Tabs
