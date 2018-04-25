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
            },
            timeout: 10000,
        })
    }

    getUser(): AxiosPromise {
        return this.axios.get('/user')
    }
}
