import React from 'react'
import 'react-native'
import { shallow } from 'enzyme'

import Button from '../index'

describe('Button', () => {
    const wrapper = shallow(<Button title={'title'} m={'title default'} onPress={jest.fn()} />)

    it('match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('has Text component', () => {
        expect(wrapper.find('Text')).toHaveLength(1)
    })

    it('has TouchableOpacity component', () => {
        expect(wrapper.find('TouchableOpacity')).toHaveLength(1)
    })

    describe('actions', () => {
        it('call onPress when pressed', () => {
            wrapper.props().onPress()
            expect(wrapper.prop('onPress')).toBeCalled()
        })
    })
})
