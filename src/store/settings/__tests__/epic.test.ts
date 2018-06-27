import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import * as actions from '../actions'
import { settingsEpic } from '../epic'
import wrapperTestEpic from 'test/wrapperTestEpic'

import { IPermitNotificationsAction } from '../types'

describe('settings epic', () => {
    const axiosMock = new MockAdapter(axios)
    const url = '/api/v1/notifications/enable'

    const state = {
        user: {
            deviceNotifId: 'device_notif_id',
        },
    }

    it('should call action type SETTINGS_PERMIT_NOTIFICATIONS_SUCCESS', (done: jest.DoneCallback) => {
        expect.hasAssertions()

        const action = {
            payload: true as IPermitNotificationsAction['payload'],
            type: actions.SETTINGS_PERMIT_NOTIFICATIONS,
        }

        const expectedActions = [{
            type: actions.SETTINGS_PERMIT_NOTIFICATIONS_SUCCESS,
        }]

        axiosMock.onPost(url).reply(200, {})

        wrapperTestEpic(
            settingsEpic,
            null,
            expectedActions.length,
            action,
            (acts: any) => {
                try {
                    expect(acts).toEqual(expectedActions)
                    done()
                } catch (err) {
                    done.fail(err)
                }
            },
            state,
        )
    })

    it('should call action type SETTINGS_PERMIT_NOTIFICATIONS_FAILED', (done: jest.DoneCallback) => {
        expect.hasAssertions()

        const action = {
            payload: true as IPermitNotificationsAction['payload'],
            type: actions.SETTINGS_PERMIT_NOTIFICATIONS,
        }

        const expectedActions = [{
            type: actions.SETTINGS_PERMIT_NOTIFICATIONS_FAILED,
        }]

        axiosMock.onPost(url).reply(400)

        wrapperTestEpic(
            settingsEpic,
            null,
            expectedActions.length,
            action,
            (acts: any) => {
                try {
                    expect(acts).toEqual(expectedActions)
                    done()
                } catch (err) {
                    done.fail(err)
                }
            },
            state,
        )
    })
})
