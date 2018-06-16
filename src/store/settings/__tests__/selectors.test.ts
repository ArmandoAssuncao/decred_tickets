import { selectSettings } from '../selectors'
import appInitialState from 'store/initialState'

describe('settings selectors', () => {
    it('should return the settings state', () => {
        expect(selectSettings(appInitialState)).toBe(appInitialState.settings)
    })
})
