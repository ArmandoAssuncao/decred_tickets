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

    it('should create a action to permitNotificationsSuccess', () => {
        const expectedAction = {
            type: actions.SETTINGS_PERMIT_NOTIFICATIONS_SUCCESS,
        }
        expect(actions.permitNotificationsSuccess()).toEqual(expectedAction)
    })

    it('should create a action to permitNotificationsFailed', () => {
        const expectedAction = {
            type: actions.SETTINGS_PERMIT_NOTIFICATIONS_FAILED,
        }
        expect(actions.permitNotificationsFailed()).toEqual(expectedAction)
    })
})
