import * as actions from '../actions'
import { ITicket, IGetTicketAction, IGetTicketSuccessAction } from '../types'

describe('ticket actions', () => {
    describe('get ticket', () => {
        it('should create a action to getTicket', () => {
            const payload: IGetTicketAction['payload'] = {
                address: 'address_test',
                stakePool: 'decredBrasil',
            }
            const expectedAction = {
                payload,
                type: actions.GET_TICKET_PENDING,
            }
            expect(actions.getTicket(payload.address, payload.stakePool)).toEqual(expectedAction)
        })

        it('should create a action to getTicketSuccess', () => {
            const tickets: ITicket[] = [{
                buyTime: 0,
                buyTxId: '',
                feeStakePool: 0,
                returnTime: 0,
                returnTotal: 0,
                returnTxId: '',
                reward: 0,
                status: 'live',
                ticketFee: 0,
                ticketPrice: 0,
                totalInvestment: 0,
            }]
            const address = 'address_test'
            const stakePool = 'decredBrasil'

            const payload: IGetTicketSuccessAction['payload'] = {
                address,
                stakePool,
                tickets,
            }

            const expectedAction = {
                payload,
                type: actions.GET_TICKET_SUCCESS,
            }
            expect(actions.getTicketSuccess(tickets, address, stakePool)).toEqual(expectedAction)
        })

        it('should create a action to getTicketFailed', () => {
            const expectedAction = {
                type: actions.GET_TICKET_FAILED,
            }
            expect(actions.getTicketFailed()).toEqual(expectedAction)
        })
    })
})
