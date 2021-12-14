import React from 'react'
import { cardsContext } from '../../../service/providers/cards.provider'
import { usersContext } from '../../../service/providers/users.provider'
import { useConfirmBoxContext } from '../../../Shared/MensageBox/toggle.provider'
import { useResumeContext } from '../add.provider'
import * as request from './../../../service/http/app.post'
import './resume.scss'
import Template from './template'

const Resume: React.FC = () => {
    const { resume, setResume } = useResumeContext()
    const { setConfirmModal } = useConfirmBoxContext()
    const { users } = usersContext()
    const { cards } = cardsContext()
    const removeSession = (index: number) => {
        resume.splice(index, 1)
        sessionStorage.setItem('pre-register', JSON.stringify(resume))
        setResume(resume.splice(index, 1))
        setConfirmModal(false)
    }
    resume.map(el =>
        Object.assign(el, {
            user_name: users
                .find(u => u.id === el.user_id)
                ?.name.captalizeCase(),
            card_name: cards.find(c => c.id === el.card_id)?.name,
        }),
    )

    const submitPurchases = async () => {
        await request
            .postDebiters(resume)
            // eslint-disable-next-line
            .then(_ => {
                console.log('SUCESSO')
                sessionStorage.setItem('pre-register', JSON.stringify([]))
                setResume([])
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <Template
            resume={resume}
            removeSession={removeSession}
            submitPurchases={() => submitPurchases()}
        />
    )
}

export default Resume
