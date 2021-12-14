import React from 'react'
import ToggleSlider from '../../components/toggle-slider'

const Template: React.FC = () => {
    return (
        <section>
            <h1>Configurações</h1>
            <div className="card">
                <ToggleSlider
                    disabled={false}
                    value={false}
                    onClick={(e: any) => console.log(e.target.value)}
                />
            </div>
        </section>
    )
}

export default Template
