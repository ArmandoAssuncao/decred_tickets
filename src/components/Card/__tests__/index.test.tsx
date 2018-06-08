import React from 'react'
import 'react-native'
import { shallow } from 'enzyme'

import Card from '../index'

describe('Card', () => {
    const wrapper = shallow(<Card type="live" value={10} onPress={jest.fn()} />)

    it('match snapshot when prop type is "live"', () => {
        wrapper.setProps({type: 'live'})
        expect(wrapper).toMatchSnapshot()
    })

    it('match snapshot when prop type is "revoked"', () => {
        wrapper.setProps({type: 'revoked'})
        expect(wrapper).toMatchSnapshot()
    })

    it('match snapshot when prop type is "voted"', () => {
        wrapper.setProps({type: 'voted'})
        expect(wrapper).toMatchSnapshot()
    })

    it('match snapshot when prop type is "expired"', () => {
        wrapper.setProps({type: 'expired'})
        expect(wrapper).toMatchSnapshot()
    })

    it('match snapshot when prop type is "missed"', () => {
        wrapper.setProps({type: 'missed'})
        expect(wrapper).toMatchSnapshot()
    })

    it('match snapshot when prop type is "unmined"', () => {
        wrapper.setProps({type: 'unmined'})
        expect(wrapper).toMatchSnapshot()
    })

    it('match snapshot when prop type is "immature"', () => {
        wrapper.setProps({type: 'immature'})
        expect(wrapper).toMatchSnapshot()
    })

    it('has 3 Component component', () => {
        expect(wrapper.find('Component')).toHaveLength(3)
    })

    it('has 2 Text component', () => {
        expect(wrapper.find('Text')).toHaveLength(2)
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
