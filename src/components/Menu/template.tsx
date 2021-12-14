import React from 'react'
import { NavLink } from 'react-router-dom'
import { Pages } from '../../routing/pages'
import logo from './../../assets/logo.png'
const Template: React.FC = () => {
    return (
        <section className="menu">
            <div className="menu__content">
                <a href="/" className="menu__content-logo">
                    {/* <span className="icon-user"></span> */}
                    <img src={logo} alt="" />
                </a>

                <nav className="menu__content-list">
                    {Pages.map((item, i) => (
                        <NavLink
                            key={i}
                            to={item.path}
                            activeClassName="active"
                        >
                            <span className={item.icon}></span>
                            {item?.name}
                        </NavLink>
                    ))}

                    <a href="/">
                        <span className="icon-logout"></span>
                        Sair
                    </a>
                </nav>
            </div>
        </section>
    )
}

export default Template
