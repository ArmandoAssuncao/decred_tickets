import React from 'react'
import 'react-native'
import { shallow } from 'enzyme'

import CardTicketDetail from '../index'
import { ITicket } from 'store/ticket/types'

describe('CardTicketDetail', () => {
    const ticket: ITicket = {
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
    }
    const wrapper = shallow(<CardTicketDetail onPress={jest.fn()} ticket={ticket} />)

    it('match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('has 1 TouchableOpacity component', () => {
        expect(wrapper.find('TouchableOpacity')).toHaveLength(1)
    })

    it('has 4 Component component', () => {
        expect(wrapper.find('Component')).toHaveLength(4)
    })

    it('has 4 Text component', () => {
        expect(wrapper.find('Text')).toHaveLength(4)
    })

    it('has 1 Image component', () => {
        expect(wrapper.find('Image')).toHaveLength(1)
    })

    describe('actions', () => {
        it('call onPress when pressed', () => {
            wrapper.props().onPress()
            expect(wrapper.prop('onPress')).toBeCalled()
        })
    })
})
