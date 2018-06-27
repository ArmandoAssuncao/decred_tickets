import { IAppState } from './types'
import { initialState as settings } from './settings/reducer'
import { initialState as ticket } from './ticket/reducer'
import { initialState as user } from './user/reducer'

const initialState: IAppState = {
    settings,
    ticket,
    user
}

export default initialState
