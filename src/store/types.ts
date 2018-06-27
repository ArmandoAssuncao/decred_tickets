import { Action } from 'redux'
import { ISettingsState } from './settings/types'
import { ITicketState } from './ticket/types'
import { IUserState } from './user/types'

export interface IAppState {
    settings: ISettingsState
    ticket: ITicketState
    user: IUserState
}

export interface IReduxAction extends Action {
    payload?: any
}
