import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import Api from '../index'

describe('api', () => {
    const axiosMock = new MockAdapter(axios)

    it('#getTicket', async () => {
        expect.assertions(1)

        const regUrl = new RegExp('/api/match/\\w')
        axiosMock.onGet(regUrl).reply(200, {test: 'test'})

        const api = new Api()
        const res = await api.getTicket('address_test', 'decredBrasil')
        expect(res.data).toEqual({test: 'test'})
    })
})
