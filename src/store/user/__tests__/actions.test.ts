import * as actions from '../actions'

describe('user actions', () => {
    describe('get user', () => {
        it('should create a action to getUser', () => {
            const expectedAction = {
                type: actions.GET_USER_PENDING,
            }
            expect(actions.getUser()).toEqual(expectedAction)
        })

        it('should create a action to getUserSuccess', () => {
            const expectedAction = {
                payload: 'test',
                type: actions.GET_USER_SUCCESS,
            }
            expect(actions.getUserSuccess('test')).toEqual(expectedAction)
        })

        it('should create a action to getUserFailed', () => {
            const expectedAction = {
                type: actions.GET_USER_FAILED,
            }
            expect(actions.getUserFailed()).toEqual(expectedAction)
        })
    })
})
