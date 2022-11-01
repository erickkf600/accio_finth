import { AxiosResponse } from 'axios'
import { api, axiosRequestConfiguration } from '../../api.axios'
import { Cards } from '../../interfaces/Cards.interface'
const axiosInstance = api(axiosRequestConfiguration)

export const getCards = (): Promise<Cards> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get('cards')
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const getAssetsTypes = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`assets`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const getOperationTypes = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .get(`operation-types`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
