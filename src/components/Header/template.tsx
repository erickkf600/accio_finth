import React from 'react'
import SelectMounth from '../SelectMounth'
import { useToolBox } from '../SelectMounth/toggle.provider'
const Template: React.FC = () => {
    const { setShow } = useToolBox()
    return (
        <section className="header">
            <div className="header__content">
                <button
                    className="icon-calendar header__content-calendar"
                    onClick={() => setShow(true)}
                ></button>
                <SelectMounth />

                <div className="header__content-user">
                    <div className="header__content-user-initials">EF</div>
                    <div className="header__content-user-info">
                        <p>Erick Ferreira</p>
                        <small>erickkf600@gmail.com</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Template
