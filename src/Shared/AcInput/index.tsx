import React from 'react'
import { useClickOutside } from '../../utils/hooks/click-outside.hook'
import './ac-input.scss'
const AcInput: React.FC<any> = input => {
    const clickOutside = useClickOutside(() => {
        const input: any = document.querySelector('.ac-select')
        input.classList.remove('ac-select--show')
    })
    const toggle = (e: any) => {
        const input: any = document.querySelector('.ac-select')
        const optionsList: any = document.querySelectorAll('.ac-options')
        input.classList.toggle('ac-select--show')

        optionsList.forEach((o: any) => {
            o.addEventListener('click', () => {
                const selected = o.querySelector('.ac-options-labels').innerHTML
                e.target.innerHTML = selected
                input.classList.remove('ac-select--show')
            })
        })
    }
    return (
        <div className="ac-select-wrapper" ref={clickOutside}>
            <div className="ac-select-label" onClick={(e: any) => toggle(e)}>
                Selecione
            </div>
            <div className="ac-select">
                <div className="ac-options">
                    <input name="test" type="radio" id="opt1" hidden />
                    <label className="ac-options-labels" htmlFor="opt1">
                        Option 1
                    </label>
                </div>
                <div className="ac-options">
                    <input name="test" type="radio" id="opt2" hidden />
                    <label className="ac-options-labels" htmlFor="opt2">
                        Option 2
                    </label>
                </div>
                <div className="ac-options">
                    <input name="test" type="radio" id="opt3" hidden />
                    <label className="ac-options-labels" htmlFor="opt3">
                        Option 3
                    </label>
                </div>
            </div>
        </div>
    )
}

export default AcInput
