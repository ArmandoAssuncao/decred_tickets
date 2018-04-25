import * as navigate from '../index'

describe('navigate', () => {
    it('#resetNavigateTo', () => {
        const expectValue = {
            actions: [{
                routeName: 'example_screen',
                type: 'Navigation/NAVIGATE',
            }],
            index: 0,
            key: null,
            type: 'Navigation/RESET',
        }
        const dispatch = jest.fn()
        navigate.resetNavigateTo('example_screen', dispatch)

        expect(dispatch.mock.calls[0][0]).toEqual(expectValue)
    })
})
