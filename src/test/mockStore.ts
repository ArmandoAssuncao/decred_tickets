import configureStore from 'redux-mock-store'
import { Store } from 'react-redux'

const mockStore = configureStore()

const globalState = {
}

export default function mockStoreGlobal(getState: any = {}): Store<any> {
    if (typeof getState === 'function') {
        return mockStore(getState)
    } else {
        return mockStore({
            ...globalState,
            ...getState,
        })
    }
}
