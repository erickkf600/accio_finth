import React from 'react'
import './toggle-slider.scss'

const ToggleSlider: React.FC<any> = input => {
    return (
        <label className="slide-toggle">
            <input
                type="checkbox"
                disabled={input.disabled}
                value={input.value}
                checked={input?.checked}
                onChange={(e: any) => input.onClick(e)}
                hidden
            />
            <span className="slider"></span>
        </label>
    )
}

export default ToggleSlider
