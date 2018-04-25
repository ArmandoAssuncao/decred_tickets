import { combineReducers } from 'redux'
import { IAppState } from './types'
import user from './user/reducer'

const rootReducer = combineReducers<IAppState>({
    user,
})

export default rootReducer
