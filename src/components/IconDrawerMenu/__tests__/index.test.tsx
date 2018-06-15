import React from 'react'
import 'react-native'
import { shallow } from 'enzyme'

import IconDrawerMenu from '../index'

describe('IconDrawerMenu', () => {
    const wrapper = shallow(<IconDrawerMenu onPress={jest.fn()} />)

    it('match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('has 1 Icon component', () => {
        expect(wrapper.find('Icon')).toHaveLength(1)
    })

    describe('actions', () => {
        it('call onPress when pressed', () => {
            wrapper.props().onPress()
            expect(wrapper.find('Icon').prop('onPress')).toBeCalled()
        })
    })
})
