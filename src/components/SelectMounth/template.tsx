import React from 'react'
interface input {
    currentYear: number
    storageMounth: any
    setYear: Function
    selected: undefined | number
    select: Function
    setMounth: Function
    refere: any
    months: { title: string; num: number; full_name: string }[]
}
const Template: React.FC<input> = input => {
    return (
        <div className="select-mounth" ref={input.refere}>
            <div className="select-mounth__year">
                <button
                    className="icon-arrow-left-s"
                    onClick={() => input.setYear(input.currentYear - 1)}
                ></button>
                <p>{input.currentYear}</p>
                <button
                    className="icon-arrow-right-s"
                    onClick={() => input.setYear(input.currentYear + 1)}
                ></button>
            </div>

            <div className="select-mounth__mounth">
                {input.months.map((item, i) => (
                    <button
                        onClick={() => {
                            input.select(i), input.setMounth(item)
                        }}
                        className={`select-mounth__mounth-select ${
                            (i === input.selected ||
                                (input.storageMounth?.num === item.num &&
                                    input.storageMounth?.year ===
                                        input.currentYear)) &&
                            'select-mounth__mounth-select--selected'
                        }`}
                        key={i}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Template
