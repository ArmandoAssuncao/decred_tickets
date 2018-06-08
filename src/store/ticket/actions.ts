import { ITicketState, ITicket, IGetTicketAction, IGetTicketSuccessAction, IGetTicketFailedAction } from './types'

export const GET_TICKET_PENDING = 'GET_TICKET_PENDING'
export const GET_TICKET_SUCCESS = 'GET_TICKET_SUCCESS'
export const GET_TICKET_FAILED = 'GET_TICKET_FAILED'

export const getTicket = (ticketAddress: string, stakePool: ITicketState['stakePool']): IGetTicketAction => ({
    payload: { address: ticketAddress, stakePool },
    type: GET_TICKET_PENDING,
})

export const getTicketSuccess = (tickets: ITicket[], address: string, stakePool: ITicketState['stakePool']): IGetTicketSuccessAction => ({
    payload: {
        address,
        stakePool,
        tickets,
    },
    type: GET_TICKET_SUCCESS,
})

export const getTicketFailed = (): IGetTicketFailedAction => ({
    type: GET_TICKET_FAILED,
})
