import { Action } from 'redux'
import { IReduxAction } from '../types'

export interface ICustomAction extends Action {
    payload: any
}

export interface IUserState {
    deviceNotifId: string
}

export interface ISaveDeviceNotifIdAction extends IReduxAction {
    payload: string
}
