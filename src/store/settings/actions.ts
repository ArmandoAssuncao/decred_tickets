import {
    IPermitNotificationsAction,
    IPermitNotificationsActionSuccess,
    IPermitNotificationsActionFailed,
} from './types'

export const SETTINGS_PERMIT_NOTIFICATIONS = 'SETTINGS_PERMIT_NOTIFICATIONS'
export const SETTINGS_PERMIT_NOTIFICATIONS_SUCCESS = 'SETTINGS_PERMIT_NOTIFICATIONS_SUCCESS'
export const SETTINGS_PERMIT_NOTIFICATIONS_FAILED = 'SETTINGS_PERMIT_NOTIFICATIONS_FAILED'

export const permitNotifications = (permit: boolean): IPermitNotificationsAction => ({
    payload: permit,
    type: SETTINGS_PERMIT_NOTIFICATIONS,
})

export const permitNotificationsSuccess = (): IPermitNotificationsActionSuccess => ({
    type: SETTINGS_PERMIT_NOTIFICATIONS_SUCCESS,
})

export const permitNotificationsFailed = (): IPermitNotificationsActionFailed => ({
    type: SETTINGS_PERMIT_NOTIFICATIONS_FAILED,
})
