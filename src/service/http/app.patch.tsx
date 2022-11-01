import { AxiosResponse } from 'axios'
import { api, axiosRequestConfiguration } from '../../api.axios'
const axiosInstance = api(axiosRequestConfiguration)

export const updatePurchase = (data: any, id: number): Promise<any> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .patch(`purchases/${id}`, data)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
