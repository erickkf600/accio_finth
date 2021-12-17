import React, { createRef, useEffect } from 'react'
import { useClickOutside } from '../../utils/hooks/click-outside.hook'
import './ac-input.scss'
const AcInput: React.FC<any> = input => {
    const ref: any = createRef()
    const clickOutside = useClickOutside(() => {
        const input: any = document.querySelector('.ac-select')
        input.classList.remove('ac-select--show')
    })

    useEffect(() => {
        if (input.selected) {
            const selected: any = document.querySelector('.ac-select-label')
            selected.innerHTML = input.options
                .find((e: any) => e.value === input.selected)
                ?.label.captalizeCase()
            console.log(selected)
        }
    }, [])
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

    const sendValue = (e: any) => {
        console.log(e.target.value)
    }
    return (
        <div className="ac-select-wrapper" ref={clickOutside}>
            <div className="ac-select-label" onClick={(e: any) => toggle(e)}>
                Selecione
            </div>
            <div className="ac-select">
                {input.options.map((opt: any, i: number) => (
                    <div
                        className="ac-options"
                        key={i}
                        onClick={() => ref.current.click()}
                    >
                        <input
                            name="test"
                            type="radio"
                            hidden
                            ref={ref}
                            onChange={() => {}}
                            onClick={(e: any) => sendValue(e)}
                            value={opt.value}
                            checked
                        />
                        <label className="ac-options-labels">
                            {opt.label.captalizeCase()}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AcInput
