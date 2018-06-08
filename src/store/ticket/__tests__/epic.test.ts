import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import * as actions from '../actions'
import { ticketEpic } from '../epic'
import wrapperTestEpic from 'test/wrapperTestEpic'

import { IGetTicketAction, IGetTicketSuccessAction } from '../types'

describe('ticket epic', () => {
    const axiosMock = new MockAdapter(axios)
    const url = new RegExp('/api/match/\\w')

    it('should call action type GET_TICKET_SUCCESS when get ticket is success', (done: jest.DoneCallback) => {
        expect.hasAssertions()

        const action = {
            payload: {
                address: 'address_test',
                stakePool: 'decredBrasil',
            } as IGetTicketAction['payload'],
            type: actions.GET_TICKET_PENDING,
        }

        const expectPayload: IGetTicketSuccessAction['payload'] = {
            address: 'address_test',
            stakePool: 'decredBrasil',
            tickets: [],
        }

        const expectedActions = [{
            payload: expectPayload,
            type: actions.GET_TICKET_SUCCESS,
        }]

        axiosMock.onGet(url).reply(200, [])

        wrapperTestEpic(
            ticketEpic,
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
        )
    })

    it('should call action type GET_TICKET_FAILED when get ticket is failed', (done: jest.DoneCallback) => {
        expect.hasAssertions()

        const action = { type: actions.GET_TICKET_PENDING }

        const expectedActions = [{
            type: actions.GET_TICKET_FAILED,
        }]

        axiosMock.onGet(url).reply(400)

        wrapperTestEpic(
            ticketEpic,
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
