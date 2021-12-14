import React, { FC, useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useParams } from 'react-router'
import { usersContext } from '../../service/providers/users.provider'
import { useSessionStorage } from '../SelectMounth/toggle.provider'
import * as response from './../../service/http/app.get'
import DetailsView from './datails.view'
import './details.scss'
import AcInput from '../../Shared/AcInput'

const Deatails: FC = () => {
    const { userid, monthref } = useParams<any>()
    const { selected } = useSessionStorage()
    const { users } = usersContext()
    const [detail, setDetail] = useState<any>([])
    const [edit, setEdit] = useState<number | undefined>()
    useEffect(() => {
        getpurchases(userid, +monthref)
    }, [])

    const validaForm = yup.object().shape({
        purchase_name: yup.string(),
        purchase_value: yup.string(),
        card: yup.string(),
        purchase_instalment: yup.string(),
    })
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<any>({
        resolver: yupResolver(validaForm),
    })
    const getpurchases = async (userid: number, monthref: number) => {
        await response
            .getPurchases(userid, monthref, selected.year)
            .then((res: any) => {
                setDetail(res)
            })
            .catch(err => {
                console.error(err)
            })
    }

    const updatePurchase = (data: any) => {
        console.log('TESTE', data)
    }
    return (
        <>
            <DetailsView
                users={users}
                register={register}
                handleSubmit={handleSubmit(updatePurchase)}
                userid={+userid}
                detail={detail}
                edit={edit}
                setEdit={setEdit}
            />
            <AcInput />
        </>
    )
}

export default Deatails
