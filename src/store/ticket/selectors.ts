import { Selector } from 'reselect'
import { IAppState } from '../types'
import { ITicketState } from './types'

export const selectTicket: Selector<IAppState, ITicketState> = (
    state: IAppState
): ITicketState => state.ticket
