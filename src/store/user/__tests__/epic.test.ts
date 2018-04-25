import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import * as actions from '../actions'
import { userEpic } from '../epic'
import wrapperTestEpic from 'test/wrapperTestEpic'

describe('user epic', () => {
    const axiosMock = new MockAdapter(axios)
    const url = '/user'

    it('should call action type GET_USER_SUCCESS when get user is success', (done: jest.DoneCallback) => {
        expect.hasAssertions()

        const action = { type: actions.GET_USER_PENDING }

        const expectPayload = {name: 'test'}
        const expectedActions = [{
            payload: expectPayload,
            type: actions.GET_USER_SUCCESS,
        }]

        axiosMock.onGet(url).reply(200, expectPayload)

        const state = {
            user: {
                name: 'name example',
            },
        }

        wrapperTestEpic(
            userEpic,
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

    it('should call action type GET_USER_FAILED when get user is failed', (done: jest.DoneCallback) => {
        expect.hasAssertions()

        const action = { type: actions.GET_USER_PENDING }

        const expectedActions = [{
            type: actions.GET_USER_FAILED,
        }]

        axiosMock.onGet(url).reply(400)

        wrapperTestEpic(
            userEpic,
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
            }
            )
    })
})
