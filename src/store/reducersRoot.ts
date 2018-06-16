import { combineReducers } from 'redux'
import { IAppState } from './types'

import settings from './settings/reducer'
import ticket from './ticket/reducer'

export default combineReducers<IAppState>({
    settings,
    ticket,
})
