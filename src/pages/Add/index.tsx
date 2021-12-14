import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { cardsContext } from '../../service/providers/cards.provider'
import { useMonths } from '../../service/providers/month.provider'
import { usersContext } from '../../service/providers/users.provider'
import { useResumeContext } from './add.provider'
import './add.scss'
import Template from './template'

const Add: React.FC = () => {
    const { resume, setResume } = useResumeContext()
    const [purchases, setPurchases] = useState<number>(1)
    const { users } = usersContext()
    const { cards } = cardsContext()
    const { months } = useMonths()
    const [installments] = useState<number[]>([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ])

    const validaForm = yup.object().shape({
        user: yup.number().required('Este campo é obrigatório'),
        purchases: yup.array().of(
            yup.object().shape({
                purch_name: yup.string().required('Este campo é obrigatório'),
                value: yup.number().required('Este campo é obrigatório'),
                ccard: yup.number().required('Este campo é obrigatório'),
                mounth: yup.number().required('Este campo é obrigatório'),
                installment: yup.number().default(1),
                obs: yup.string(),
            }),
        ),
    })
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isValid },
    } = useForm<any>({
        resolver: yupResolver(validaForm),
    })

    const cadPurchase = (data: any) => {
        const newValues = data.purchases.map((el: any) => {
            return {
                card_id: el.ccard,
                instalments: el.installment,
                buy_name: el.purch_name,
                user_id: data.user,
                mounth_ref: el.mounth,
                value: el.value,
                year: new Date().getFullYear(),
                obs: el.obs,
            }
        })
        const setValue = [...resume, ...newValues]
        sessionStorage.setItem('pre-register', JSON.stringify(setValue))
        setResume(setValue)
        setPurchases(1)
        reset()
    }
    return (
        <Template
            register={register}
            handleSubmit={handleSubmit(cadPurchase)}
            users={users}
            cards={cards}
            months={months}
            errors={errors}
            purchases={purchases}
            setPurchases={setPurchases}
            installments={installments}
            watch={watch}
            isValid={isValid}
            resume={resume}
        />
    )
}

export default Add
