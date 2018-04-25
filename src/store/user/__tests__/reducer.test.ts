import reducer from '../reducer'
import * as actions from '../actions'
import appState from 'store/initialState'

describe('user reducer', () => {
    const initialState = appState.user

    it('should return the initial state', () => {
        expect(
            reducer(initialState, {
                type: 'action not exists',
            })
        ).toEqual(initialState)
    })

    it('should return same state in GET_USER_PENDING', () => {
        const state = {
            ...initialState,
        }
        expect(
            reducer(initialState, {
                type: actions.GET_USER_PENDING,
            })
        ).toEqual(state)
    })

    it('should return new state in GET_USER_SUCCESS', () => {
        const payload = {
            error: false,
            name: 'name example',
        }
        const newState = {
            ...initialState,
            name: payload.name,
        }
        expect(
            reducer(initialState, {
                payload,
                type: actions.GET_USER_SUCCESS,
            })
        ).toEqual(newState)
    })

    it('should return same state in GET_USER_FAILED', () => {
        const newState = {
            ...initialState,
            error: true,
        }
        expect(
            reducer(initialState, {
                type: actions.GET_USER_FAILED,
            })
        ).toEqual(newState)
    })
})
