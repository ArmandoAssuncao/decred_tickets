import { ITicket } from 'store/ticket/types'

export interface IProps {
    onPress?: () => void
    type: ITicket['status']
    value: number
}

export interface IState {
}
