import { Action } from 'redux'
import { IUserState } from './user/types'

export interface IAppState {
    user: IUserState
}

export interface IReduxAction extends Action {
    payload?: any
}

export interface IErrorReduxAction extends Action {
    payload?: any
}
