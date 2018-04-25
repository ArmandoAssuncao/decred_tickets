import { Action } from 'redux'

export interface ICustomAction extends Action {
    payload: any
}

export interface IUserState {
    name: string
    error: boolean
}
