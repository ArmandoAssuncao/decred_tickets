import axios, { AxiosInstance, AxiosPromise } from 'axios'
import constants from 'config/constants'
import env from 'config/enviroment'
import { ITicketState } from 'store/ticket/types'

export default class Api {
    private axios: AxiosInstance

    constructor() {
        this.axios = axios.create({
            baseURL: env.API_URL,
            headers: {
                Accept: constants.HTTP_HEADERS.ACCEPT,
            },
            timeout: 15000,
        })
    }

    getTicket(address: string, stakePool: ITicketState['stakePool']): AxiosPromise {
        switch (stakePool) {
            case 'decredBrasil':
                return this.axios.get(`https://dcrdata.decredbrasil.com/api/match/${address.trim()}`)
            default:
                throw new Error('StakePool not found')
        }
    }
}
