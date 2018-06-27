import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import Api from '../index'

describe('api', () => {
    const axiosMock = new MockAdapter(axios)

    it('#sendPhoneIdAndTicked', async () => {
        expect.assertions(1)

        axiosMock.onPost('/api/v1/notifications').reply(200, {test: 'test'})

        const api = new Api()
        const res = await api.sendPhoneIdAndTicked('phone_id', 'address', 'decredBrasil')
        expect(res.data).toEqual({test: 'test'})
    })

    it('#enablePushNotification', async () => {
        expect.assertions(1)

        axiosMock.onPost('/api/v1/notifications/enable').reply(200, {test: 'test'})

        const api = new Api()
        const res = await api.enablePushNotification('phone_id', true)
        expect(res.data).toEqual({test: 'test'})
    })
})
