import { Reducer } from 'redux'
import { IUserState, ICustomAction } from './types'
import * as actions from './actions'

export const initialState: IUserState = {
    error: false,
    name: null,
}

const userReducer: Reducer<IUserState> = (
    state: IUserState = initialState,
    action: ICustomAction
): IUserState => {
    switch (action.type) {
        case actions.GET_USER_PENDING:
        return state
        case actions.GET_USER_SUCCESS:
        return {
            ...initialState,
            error: false,
            name: action.payload.name,
        }
        case actions.GET_USER_FAILED:
        return {
            ...state,
            error: true,
        }
        default:
        return state
    }
}

export default userReducer
