import * as actions from '../actions'

describe('user actions', () => {
    it('should create a action to saveDeviceNotifId', () => {
        const payload = 'device_notif_id'
        const expectedAction = {
            payload,
            type: actions.USER_SAVE_DEVICE_NOTIF_ID,
        }
        expect(actions.saveDeviceNotifId(payload)).toEqual(expectedAction)
    })
})
