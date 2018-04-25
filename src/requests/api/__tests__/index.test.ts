import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import Api from '../index'

describe('api', () => {
    const axiosMock = new MockAdapter(axios)

    it('#getUser', async () => {
        expect.assertions(1)

        axiosMock.onGet('/user').reply(200, {test: 'test'})

        const api = new Api()
        const res = await api.getUser()
        expect(res.data).toEqual({test: 'test'})
    })
})
