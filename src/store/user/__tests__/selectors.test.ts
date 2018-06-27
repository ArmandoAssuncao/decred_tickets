import { selectUser } from '../selectors'
import appInitialState from 'store/initialState'

describe('user selectors', () => {
    it('should return the user state', () => {
        expect(selectUser(appInitialState)).toBe(appInitialState.user)
    })
})
