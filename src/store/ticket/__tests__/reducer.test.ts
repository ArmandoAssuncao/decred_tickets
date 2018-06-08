import reducer from '../reducer'
import * as actions from '../actions'
import appState from 'store/initialState'

import { IGetTicketSuccessAction } from '../types'

describe('ticket reducer', () => {
    const initialState = appState.ticket

    it('should return the initial state', () => {
        expect(
            reducer(initialState, {
                type: 'action not exists',
            })
        ).toEqual(initialState)
    })

    it('should return new state in GET_TICKET_PENDING', () => {
        const payload = {
            address: 'address_test',
            stakePool: 'stakepool_test',
        }
        const newState = {
            ...initialState,
            error: false,
            pending: true,
        }
        expect(
            reducer(initialState, {
                payload,
                type: actions.GET_TICKET_PENDING,
            })
        ).toEqual(newState)
    })

    it('should return new state in GET_TICKET_SUCCESS', () => {
        const payload: IGetTicketSuccessAction['payload'] = {
            address: 'address_test',
            stakePool: 'decredBrasil',
            tickets: [],
        }
        const newState = {
            ...initialState,
            address: payload.address,
            error: false,
            stakePool: payload.stakePool,
            tickets: payload.tickets,
            updatedAt: expect.any(Number),
        }
        expect(
            reducer(initialState, {
                payload,
                type: actions.GET_TICKET_SUCCESS,
            })
        ).toEqual(newState)
    })

    it('should return same state in GET_TICKET_FAILED', () => {
        const newState = {
            ...initialState,
            error: true,
        }
        expect(
            reducer(initialState, {
                type: actions.GET_TICKET_FAILED,
            })
        ).toEqual(newState)
    })
})
