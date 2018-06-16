import * as actions from '../actions'

describe('settings actions', () => {
    it('should create a action to permitNotifications', () => {
        const payload = false
        const expectedAction = {
            payload,
            type: actions.SETTINGS_PERMIT_NOTIFICATIONS,
        }
        expect(actions.permitNotifications(payload)).toEqual(expectedAction)
    })
})
