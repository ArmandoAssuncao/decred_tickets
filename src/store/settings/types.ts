import { Action } from 'redux'
import { IReduxAction } from '../types'

export interface ICustomAction extends Action {
    payload: any
}

export interface ISettingsState {
    permitNotifications: boolean
}

export interface IPermitNotificationsAction extends IReduxAction {
    payload: boolean
}

export interface IPermitNotificationsActionSuccess extends IReduxAction {
}
export interface IPermitNotificationsActionFailed extends IReduxAction {
}
