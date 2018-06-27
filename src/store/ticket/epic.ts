import 'rxjs'
import { ActionsObservable, Epic } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import { IAppState, IReduxAction } from '../types'
import * as actions from './actions'
import { IGetTicketAction, IGetTicketSuccessAction, IGetTicketFailedAction, ITicket } from './types'

import ApiDecred from 'services/apiDecred'

export const ticketEpic: Epic<IReduxAction, IAppState> =
    (action$: ActionsObservable<IReduxAction>): Observable<IReduxAction> =>
    action$
    .ofType(actions.GET_TICKET_PENDING)
    .switchMap(async (action: IGetTicketAction): Promise<IGetTicketSuccessAction | IGetTicketFailedAction> => {
        const { payload } = action
        try {
            const apiDecred = new ApiDecred()
            const res = await apiDecred.getTicket(payload.address, payload.stakePool)

            const tickets: ITicket[] = res.data.map((ticket) => (
                {
                    buyTime: ticket.buytime * 1000,
                    buyTxId: ticket.buytxid,
                    feeStakePool: ticket.feestakepool,
                    returnTime: ticket.returntime * 1000,
                    returnTotal: ticket.returntotal,
                    returnTxId: ticket.returntxid,
                    reward: ticket.reward,
                    status: ticket.status,
                    ticketFee: ticket.ticketfee,
                    ticketPrice: ticket.ticketprice,
                    totalInvestment: ticket.totalinvestment,
                }
            ))
            return actions.getTicketSuccess(tickets, payload.address, payload.stakePool)
        } catch {
            return actions.getTicketFailed()
        }
    })
