import * as React from 'react'
import { shallowStore } from 'test/enzyme'

import Settings from '../index'
import { ISettingsState } from 'store/settings/types'

describe('Settings test render', () => {
    const store = {
        settings: {
            permitNotifications: true,
        } as ISettingsState,
    }

    const wrapper = shallowStore(<Settings permitNotifications={jest.fn()} />, store)

    it('Testing snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('Testing instance of component', () => {
        expect(wrapper.instance()).toBeInstanceOf(Settings.WrappedComponent)
    })

    it('has 1 ScrollView', () => {
        expect(wrapper.find('ScrollView')).toHaveLength(1)
    })
})
