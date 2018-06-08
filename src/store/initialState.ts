import { IAppState } from './types'
import { initialState as ticket } from './ticket/reducer'

const initialState: IAppState = {
    ticket,
}

export default initialState
