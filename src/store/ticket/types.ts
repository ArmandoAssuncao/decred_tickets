import { Action } from 'redux'
import { IReduxAction } from '../types'

export interface ICustomAction extends Action {
    payload: any
}

export interface ITicketState {
    address: string
    error: boolean
    pending: boolean
    stakePool: 'decredBrasil'
    tickets: ITicket[]
    updatedAt?: number
}

export interface ITicket {
    buyTime: number
    buyTxId: string
    feeStakePool: number
    returnTime: number
    returnTotal: number
    returnTxId: string
    reward: number
    status: 'revoked' | 'voted' | 'expired' | 'missed' | 'unmined' | 'immature' | 'live'
    ticketFee: number
    ticketPrice: number
    totalInvestment: number
}

export interface IGetTicketAction extends IReduxAction {
    payload: {
        address: string
        stakePool: ITicketState['stakePool']
    }
}

export interface IGetTicketSuccessAction extends IReduxAction {
    payload: {
        address: string
        stakePool: ITicketState['stakePool']
        tickets: ITicket[]
    }
}

export interface IGetTicketFailedAction extends IReduxAction {
}
