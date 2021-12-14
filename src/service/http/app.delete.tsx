import { AxiosResponse } from 'axios'
import { api, axiosRequestConfiguration } from '../../api.axios'
const axiosInstance = api(axiosRequestConfiguration)

export const deleteDebiters = (id: number): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        axiosInstance
            .delete(`debiters/${id}`)
            .then((value: AxiosResponse) => {
                resolve(value.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
