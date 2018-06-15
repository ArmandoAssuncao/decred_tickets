import * as React from 'react'
import { shallowStore } from 'test/enzyme'

import About from '../index'

describe('About test render', () => {
    const store = {}

    const wrapper = shallowStore(<About />, store)

    it('Testing snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('Testing instance of component', () => {
        expect(wrapper.instance()).toBeInstanceOf(About.WrappedComponent)
    })

    it('has 1 ScrollView', () => {
        expect(wrapper.find('ScrollView')).toHaveLength(1)
    })

    it('has 5 Component', () => {
        expect(wrapper.find('Component')).toHaveLength(5)
    })

    it('has 7 Text', () => {
        expect(wrapper.find('Text')).toHaveLength(7)
    })

    it('has 2 TouchableOpacity', () => {
        expect(wrapper.find('TouchableOpacity')).toHaveLength(2)
    })
})
