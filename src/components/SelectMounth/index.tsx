import React, { useState } from 'react'
import { useMonths } from '../../service/providers/month.provider'
import { useClickOutside } from '../../utils/hooks/click-outside.hook'
import './select-mounth.scss'
import Template from './template'
import { useSessionStorage, useToolBox } from './toggle.provider'
const SelectMounth: React.FC = () => {
    const storageMounth: any = sessionStorage.getItem('mounth-selected')
    const jsonMonths: any = JSON.parse(storageMounth) || {}
    const [year, setYear] = useState<number>(
        Object.keys(jsonMonths)?.length
            ? jsonMonths.year
            : new Date().getFullYear(),
    )
    const [selected, select] = useState<undefined | number>()
    const { show, setShow } = useToolBox()
    const { setSelected } = useSessionStorage()
    const { months } = useMonths()

    const setMounth = (data: any) => {
        setSelected(Object.assign(data, { year: year }))
        setShow(false)
    }
    const clickOutside = useClickOutside(() => {
        setShow(false)
    })

    // const concernedElement = document.querySelector('.select-mounth')
    // document.addEventListener('mousedown', (event: any) => {
    //     if (
    //         !concernedElement?.contains(event.target) &&
    //         !event.target.closest('button')
    //     ) {
    //         setShow(false)
    //     }
    // })
    return (
        <>
            {show && (
                <>
                    <div className="overlay overlay--01"></div>
                    <Template
                        refere={clickOutside}
                        currentYear={year}
                        months={months}
                        selected={selected}
                        storageMounth={jsonMonths}
                        setYear={setYear}
                        select={select}
                        setMounth={(e: any) => setMounth(e)}
                    />
                </>
            )}
        </>
    )
}

export default SelectMounth
