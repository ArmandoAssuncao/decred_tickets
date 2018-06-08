import configureStore from 'redux-mock-store'
import { Store } from 'react-redux'

const mockStore = configureStore()

const globalState = {
}

export default function mockStoreGlobal(getState: any = {}): Store<any> {
    return getState === 'function'
    ? mockStore(getState)
    : mockStore({ ...globalState, ...getState })
}
