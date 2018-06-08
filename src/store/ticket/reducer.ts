import { Reducer } from 'redux'
import moment from 'moment'
import { ITicketState, ICustomAction } from './types'
import * as actions from './actions'

export const initialState: ITicketState = {
    address: null,
    error: false,
    pending: false,
    stakePool: null,
    tickets: [],
    updatedAt: null,
}

const ticketReducer: Reducer<ITicketState> = (
    state: ITicketState = initialState,
    action: ICustomAction
): ITicketState => {
    switch (action.type) {
        case actions.GET_TICKET_PENDING:
            return {
                ...state,
                error: false,
                pending: true,
            }
        case actions.GET_TICKET_SUCCESS:
            return {
                ...initialState,
                address: action.payload.address,
                stakePool: action.payload.stakePool,
                tickets: action.payload.tickets,
                updatedAt: moment().valueOf(),
            }
        case actions.GET_TICKET_FAILED:
            return {
                ...initialState,
                error: true,
            }
        default:
            return state
    }
}

export default ticketReducer
