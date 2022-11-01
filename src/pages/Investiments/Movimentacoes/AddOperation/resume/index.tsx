import React from 'react'
import { useConfirmBoxContext } from '../../../../../Shared/MensageBox/toggle.provider'
import { useResumeMovementsContext } from '../add-perations.provider'
import './resume.scss'
import Template from './template'
import { postMovements } from './../../../../../service/http/app.post'

const Resume: React.FC<any> = ({ closeForm }: any) => {
    const { resumeMovements, setMovementsResume } = useResumeMovementsContext()
    const { setConfirmModal } = useConfirmBoxContext()
    const removeSession = (index: number) => {
        const currentValue = [...resumeMovements]
        currentValue.splice(index, 1)
        sessionStorage.setItem(
            'pre-register-movimentacao',
            JSON.stringify(currentValue),
        )
        setMovementsResume(currentValue)
        setConfirmModal(false)
    }

    const submitMovements = async () => {
        const newValues = resumeMovements.map((el: any) => {
            return {
                cod: el.cod,
                date_operation: el.date_operation,
                qtd: el.qtd,
                type: el.type,
                type_operation: el.type_operation,
                unity_value: el.unity_value,
                fee: el.fee,
                obs: el.obs,
                total: el.unity_value,
            }
        })
        const setValues = newValues
        await postMovements(setValues)
            // eslint-disable-next-line
            .then(_ => {
                sessionStorage.setItem(
                    'pre-register-movimentacao',
                    JSON.stringify([]),
                )
                setMovementsResume([])
                closeForm(false)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <Template
            resume={resumeMovements}
            removeSession={removeSession}
            submitPurchases={() => submitMovements()}
        />
    )
}

export default Resume
