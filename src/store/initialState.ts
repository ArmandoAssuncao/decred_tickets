import { IAppState } from './types'
import { initialState as settings } from './settings/reducer'
import { initialState as ticket } from './ticket/reducer'

const initialState: IAppState = {
    settings,
    ticket,
}

export default initialState
