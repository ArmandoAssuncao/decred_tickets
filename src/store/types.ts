import { Action } from 'redux'
import { ITicketState } from './ticket/types'

export interface IAppState {
    ticket: ITicketState
}

export interface IReduxAction extends Action {
    payload?: any
}
