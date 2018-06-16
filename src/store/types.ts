import { Action } from 'redux'
import { ISettingsState } from './settings/types'
import { ITicketState } from './ticket/types'

export interface IAppState {
    settings: ISettingsState
    ticket: ITicketState
}

export interface IReduxAction extends Action {
    payload?: any
}
