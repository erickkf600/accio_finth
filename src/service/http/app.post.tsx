import { AxiosResponse } from 'axios'
import { api, axiosRequestConfiguration } from '../../api.axios'
const axiosInstance = api(axiosRequestConfiguration)

export const postDebiters = (data: any): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .post(`register`, data)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const postMovements = (data: any): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .post(`moviments`, data)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
