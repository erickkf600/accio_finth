import { AxiosResponse } from 'axios'
import { api, axiosRequestConfiguration } from '../../api.axios'
import { Debiters } from '../../interfaces/DebitersResponse.interface'
import { Month } from '../../interfaces/MonthResponse.interface'
import { Users } from '../../interfaces/Users.interface'
const axiosInstance = api(axiosRequestConfiguration)

export const getDebiters = (queryParams: {
    num: number
    year: number
}): Promise<Debiters> => {
    console.log(queryParams)
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`debiters/${queryParams.num}/${queryParams.year}`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const getPurchases = (
    userid: number,
    monthref: number,
    year: number,
): Promise<Debiters> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`purchases-by-user/${userid}/${monthref}/${year}`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const getMonths = (): Promise<Month> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get('months')
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const getUsers = (): Promise<Users> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get('users')
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const getMovementsList = (
    year: number,
    limit: number,
    page: number,
): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`moviments/${year}/${page}/${limit}`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
