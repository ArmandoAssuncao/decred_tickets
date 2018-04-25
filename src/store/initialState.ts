import { IAppState } from './types'
import { initialState as user } from './user/reducer'

const initialState: IAppState = {
    user,
}

export default initialState
