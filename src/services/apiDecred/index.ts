import axios, { AxiosInstance, AxiosPromise } from 'axios'
import constants from 'config/constants'
import { ITicketState } from 'store/ticket/types'

export default class ApiDecred {
    private axios: AxiosInstance

    constructor() {
        this.axios = axios.create({
            headers: {
                Accept: constants.HTTP_HEADERS.ACCEPT,
            },
            timeout: 30000,
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
