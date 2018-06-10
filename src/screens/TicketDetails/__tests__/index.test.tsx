import * as React from 'react'
import { shallowStore } from 'test/enzyme'

import TicketDetails from '../index'
import { INavigationState } from '../types'

describe('TicketDetails test render', () => {
    const store = {}
    const props = {
        navigation: {
            dispatch: jest.fn(),
            goBack: jest.fn(),
            dismiss: jest.fn(),
            navigate: jest.fn(),
            state: {
                params: {
                    tickets: [],
                },
            } as INavigationState,
        } as any,
    }
    let wrapper = shallowStore(<TicketDetails {...props} />, store)

    it('Testing snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('Testing instance of component', () => {
        expect(wrapper.instance()).toBeInstanceOf(TicketDetails.WrappedComponent)
    })

    it('has 1 ScrollView', () => {
        expect(wrapper.find('ScrollView')).toHaveLength(1)
    })

    it('has 1 Component when tickets is empty', () => {
        expect(wrapper.find('Component')).toHaveLength(1)
    })

    it('has 1 Text when tickets is empty', () => {
        expect(wrapper.find('Text')).toHaveLength(1)
    })

    it('has 1 CardTicketDetail when tickets length is 1', () => {
        const newProps = { ...props }
        newProps.navigation.state = {
            params: {
                tickets: [
                    {
                        buyTime: 0,
                        buyTxId: 'buyTxId',
                        feeStakePool: 0,
                        returnTime: 0,
                        returnTotal: 0,
                        returnTxId: 'returnTxId',
                        reward: 0,
                        status: 'live',
                        ticketFee: 0,
                        ticketPrice: 0,
                        totalInvestment: 0,
                    },
                ],
            },
        } as INavigationState
        wrapper = shallowStore(<TicketDetails {...props} />, store)
        expect(wrapper.find('CardTicketDetail')).toHaveLength(1)
    })
})
