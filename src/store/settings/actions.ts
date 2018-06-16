import { IPermitNotificationsAction } from './types'

export const SETTINGS_PERMIT_NOTIFICATIONS = 'SETTINGS_PERMIT_NOTIFICATIONS'

export const permitNotifications = (permit: boolean): IPermitNotificationsAction => ({
    payload: permit,
    type: SETTINGS_PERMIT_NOTIFICATIONS,
})
