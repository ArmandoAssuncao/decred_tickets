import reducer from '../reducer'
import * as actions from '../actions'
import appState from 'store/initialState'

describe('settings reducer', () => {
    const initialState = appState.settings

    it('should return the initial state', () => {
        expect(
            reducer(initialState, {
                type: 'action not exists',
            })
        ).toEqual(initialState)
    })

    it('should return new state in SETTINGS_PERMIT_NOTIFICATIONS', () => {
        const payload = false
        const newState = {
            ...initialState,
            permitNotifications: payload,
        }
        expect(
            reducer(initialState, {
                payload,
                type: actions.SETTINGS_PERMIT_NOTIFICATIONS,
            })
        ).toEqual(newState)
    })
})
