import React from 'react'
import './mensage-box.scss'
import { useConfirmBoxContext } from './toggle.provider'

interface input {
    title: string
    text?: string
    secondaryButton?: string
    primaryButton?: string
    className?: string
    callBack?: any
}
const MensageBox: React.FC<input> = input => {
    const { confirmModal, setConfirmModal } = useConfirmBoxContext()

    return (
        <>
            <div
                className={`msg-box ${input.className} ${
                    confirmModal && 'active'
                }`}
            >
                <span className="msg-box__icon icon-help"></span>
                <p className="msg-box__title">{input.title}</p>

                <p className="msg-box__text">{input.text}</p>

                <div className="msg-box__actions">
                    {!!input.secondaryButton && (
                        <button
                            className="btn btn--extra-light"
                            onClick={() => setConfirmModal(false)}
                        >
                            {input.secondaryButton}
                        </button>
                    )}
                    {!!input.primaryButton && (
                        <button
                            className="btn"
                            onClick={() => input.callBack()}
                        >
                            {input.primaryButton}
                        </button>
                    )}
                </div>
            </div>
            <span
                className={`overlay ${confirmModal && 'overlay--active'}`}
            ></span>
        </>
    )
}

export default MensageBox
