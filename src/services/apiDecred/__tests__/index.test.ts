import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import ApiDecred from '../index'

describe('api decred', () => {
    const axiosMock = new MockAdapter(axios)

    it('#getTicket', async () => {
        expect.assertions(1)

        const regUrl = new RegExp('/api/match/\\w')
        axiosMock.onGet(regUrl).reply(200, {test: 'test'})

        const api = new ApiDecred()
        const res = await api.getTicket('address_test', 'decredBrasil')
        expect(res.data).toEqual({test: 'test'})
    })
})
