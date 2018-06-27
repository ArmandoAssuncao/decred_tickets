import 'rxjs'
import React from 'react'
import 'react-native'
import { shallowStore } from 'test/enzyme'
import { ISettingsState } from 'store/settings/types'
import { IUserState } from 'store/user/types'

import Root from '../index'

describe('Root component', () => {
    const store = {
        settings: {
            permitNotifications: true,
        } as ISettingsState,
        user: {
            deviceNotifId: 'device_notif_id',
        } as IUserState,
    }
    const mockProps = {
        screenProps: {
            resetNavigateTo: jest.fn(),
        },
    }

    it('should match snapshot', () => {
        const wrapper = shallowStore(<Root {...mockProps} saveDeviceNotifId={jest.fn()} />, store)
        expect(wrapper).toMatchSnapshot()
    })
})
