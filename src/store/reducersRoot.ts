import { combineReducers } from 'redux'
import { IAppState } from './types'
import ticket from './ticket/reducer'

export default combineReducers<IAppState>({
    ticket,
})
