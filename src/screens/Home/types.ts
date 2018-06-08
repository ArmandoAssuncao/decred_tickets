import { IScreenProps } from 'containers/Root/types'
import { getTicket } from 'store/ticket/actions'
import { ITicketState } from 'store/ticket/types'

export interface IConnectedProps {
    ticket?: ITicketState
}

export interface IActionCreators {
    getTicket: typeof getTicket
}

export interface IProps extends IScreenProps, IConnectedProps, IActionCreators {
}

export interface IState {
    stakePool: ITicketState['stakePool']
    ticketAddress: ITicketState['address']
}
