import * as React from 'react'
import { shallowStore } from 'test/enzyme'

import PageExample from '../index'

describe('PageExample test render', () => {
    const store = {
        user: {
            error: false,
            name: 'name example',
        },
    }
    const wrapper = shallowStore(<PageExample getUser={jest.fn()} />, store)

    it('Testing snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('Testing instance of component', () => {
        expect(wrapper.instance()).toBeInstanceOf(PageExample.WrappedComponent)
    })

    it('has 2 Text', () => {
        expect(wrapper.find('Text')).toHaveLength(2)
    })
})
