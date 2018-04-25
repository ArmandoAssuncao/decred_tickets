import React from 'react'
import 'react-native'
import { shallow } from 'enzyme'

import Text from '../index'

describe('Text', () => {
    it('match snapshot', () => {
        const wrapper = shallow(<Text id={'testId'} m="default value">text</Text>)
        expect(wrapper).toMatchSnapshot()
    })

    it('has text component', () => {
        const wrapper = shallow(<Text m="default value">text</Text>)
        expect(wrapper.find('Text')).toHaveLength(1)
    })
})
