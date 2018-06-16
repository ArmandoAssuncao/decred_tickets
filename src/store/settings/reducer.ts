import { Reducer } from 'redux'
import { ISettingsState, ICustomAction } from './types'
import * as actions from './actions'

export const initialState: ISettingsState = {
    permitNotifications: true,
}

const settingsReducer: Reducer<ISettingsState> = (
    state: ISettingsState = initialState,
    action: ICustomAction
): ISettingsState => {
    switch (action.type) {
        case actions.SETTINGS_PERMIT_NOTIFICATIONS:
            return {
                ...state,
                permitNotifications: action.payload,
            }
        default:
            return state
    }
}

export default settingsReducer
