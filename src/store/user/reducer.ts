import { Reducer } from 'redux'
import { IUserState, ICustomAction } from './types'
import * as actions from './actions'

export const initialState: IUserState = {
    deviceNotifId: null,
}

const userReducer: Reducer<IUserState> = (
    state: IUserState = initialState,
    action: ICustomAction
): IUserState => {
    switch (action.type) {
        case actions.USER_SAVE_DEVICE_NOTIF_ID:
            return {
                ...state,
                deviceNotifId: action.payload,
            }
        default:
            return state
    }
}

export default userReducer
