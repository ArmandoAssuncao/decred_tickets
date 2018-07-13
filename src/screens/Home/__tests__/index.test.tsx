import * as React from 'react'
import { shallowStore } from 'test/enzyme'

import Home from '../index'
import { ITicketState } from 'store/ticket/types'

describe('Home test render', () => {
    const store = {
        ticket: {
            address: 'address',
            error: false,
            stakePool: 'decredBrasil',
            tickets: [],
        } as ITicketState,
    }
    const wrapper = shallowStore(<Home getTicket={jest.fn()} />, store)

    it('Testing snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('Testing instance of component', () => {
        expect(wrapper.instance()).toBeInstanceOf(Home.WrappedComponent)
    })
})
