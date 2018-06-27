import axios, { AxiosInstance, AxiosPromise } from 'axios'
import constants from 'config/constants'
import env from 'config/enviroment'

export default class Api {
    private axios: AxiosInstance

    constructor() {
        this.axios = axios.create({
            baseURL: env.API_URL,
            headers: {
                Accept: constants.HTTP_HEADERS.ACCEPT,
                Authorization: env.API_AUTH_KEY,
            },
            timeout: 15000,
        })
    }

    sendPhoneIdAndTicked(phoneId: string, ticketAddress: string, stakePool: string): AxiosPromise {
        const data = {
            phone_id: phoneId,
            stake_pool: stakePool,
            ticket_address: ticketAddress,
        }
        return this.axios.post('/api/v1/notifications', data)
    }

    enablePushNotification(phoneId: string, enable: boolean): AxiosPromise {
        const data = {
            enable,
            phone_id: phoneId,
        }
        return this.axios.post('/api/v1/notifications/enable', data)
    }
}
