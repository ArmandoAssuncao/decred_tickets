import { selectTicket } from '../selectors'
import appInitialState from 'store/initialState'

describe('ticket selectors', () => {
    it('should return the ticket state', () => {
        expect(selectTicket(appInitialState)).toBe(appInitialState.ticket)
    })
})
