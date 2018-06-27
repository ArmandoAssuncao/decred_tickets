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

    it('should return new state in USER_SAVE_DEVICE_NOTIF_ID', () => {
        const payload = 'device_notif_id'
        const newState = {
            ...initialState,
            deviceNotifId: payload,
        }
        expect(
            reducer(initialState, {
                payload,
                type: actions.USER_SAVE_DEVICE_NOTIF_ID,
            })
        ).toEqual(newState)
    })
})
