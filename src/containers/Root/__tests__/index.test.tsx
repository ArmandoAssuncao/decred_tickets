import 'rxjs'
import React from 'react'
import 'react-native'
import { shallowStore } from 'test/enzyme'
import Root from '../index'

describe('Root component', () => {
    const store = {}
    const mockProps = {
        screenProps: {
            resetNavigateTo: jest.fn(),
        },
    }

    it('should match snapshot', () => {
        const wrapper = shallowStore(<Root {...mockProps} />, store)
        expect(wrapper).toMatchSnapshot()
    })
})
