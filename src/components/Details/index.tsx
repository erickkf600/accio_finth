import { yupResolver } from '@hookform/resolvers/yup'
import React, { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import * as yup from 'yup'
import { cardsContext } from '../../service/providers/cards.provider'
import { usersContext } from '../../service/providers/users.provider'
import { useSessionStorage } from '../SelectMounth/toggle.provider'
import * as response from './../../service/http/app.get'
import Cards from './Cards'
import DetailsView from './datails.view'
import './details.scss'

const Deatails: FC = () => {
    const { userid, monthref } = useParams<any>()
    const { selected } = useSessionStorage()
    const { users } = usersContext()
    const [detail, setDetail] = useState<any>([])
    const { cards } = cardsContext()
    const [edit, setEdit] = useState<number | undefined>()
    const [add, setAdd] = useState<boolean>(false)
    const [obs, showObs] = useState<boolean>(false)
    const [total, setTotal] = useState<number>(0)
    const [totalCards, setTotalCards] = useState<any[]>([])
    useEffect(() => {
        getpurchases(userid, +monthref)
    }, [])

    const validaForm = yup.object().shape({
        list: yup.array().of(
            yup.object().shape({
                purchase_name: yup.string(),
                purchase_value: yup.string(),
                card: yup.string(),
                purchase_instalment: yup.string(),
            }),
        ),
    })
    const validaFormNew = yup.object().shape({
        purchase_name: yup.string().required(),
        purchase_value: yup.string().required(),
        card: yup.string().required(),
        purchase_instalment: yup.string().required(),
        obs: yup.string().default(''),
    })
    const { register, getValues } = useForm<any>({
        resolver: yupResolver(validaForm),
    })
    const {
        register: register2,
        handleSubmit,
        formState: { errors },
    } = useForm<any>({
        resolver: yupResolver(validaFormNew),
    })

    const getpurchases = async (userid: number, monthref: number) => {
        await response
            .getPurchases(userid, monthref, selected.year)
            .then((res: any) => {
                setDetail(res)
                setTotal(res.sum('instalment_value'))
                setTotalCards(res.groupBy('card_name'))
                console.log(totalCards)
            })
            .catch(err => {
                console.error(err)
            })
    }
    const updatePurchase = async (i: number) => {
        const cardFind = cards.find(c => c.id == getValues().list[i].card)
        detail[i].buy_name = getValues().list[i].purch_name
        detail[i].instalment_value = +getValues().list[i].purchase_value
        detail[i].instalment_num = +getValues().list[i].purchase_instalment
        detail[i].card = {
            id: cardFind?.id,
            name: cardFind?.name,
        }
        setTotal(detail.sum('instalment_value'))
        // await request
        //     .updatePurchase(getValues().list[i], detail[i].id)
        //     .then(() => {})
        //     .catch(err => {
        //         console.error(err)
        //     })
        setEdit(-1)
    }
    const sendNewValue = async (data: any) => {
        const newPurchase: any[] = []

        newPurchase.push({
            buy_name: data.purchase_name,
            card_id: +data.card,
            card_name: cards.find(c => c.id == data.card)?.name,
            instalments: data.purchase_instalment,
            mounth_ref: +monthref,
        })
        console.log(monthref)
    }
    return (
        <>
            <DetailsView
                users={users}
                register={register}
                handleSubmit={(i: number) => updatePurchase(i)}
                userid={+userid}
                detail={detail}
                edit={edit}
                cards={cards}
                add={add}
                setAdd={setAdd}
                setEdit={setEdit}
                sendNewValue={handleSubmit(sendNewValue)}
                register2={register2}
                errors={errors}
                obs={obs}
                total={total}
                showObs={showObs}
            />
            <Cards totalCards={totalCards} />
        </>
    )
}

export default Deatails
