import { ITicketState } from 'store/ticket/types'

export interface IProps {
    value?: ITicketState['stakePool']
    onChange?: (value: ITicketState['stakePool']) => void
}

export interface IState {
}
