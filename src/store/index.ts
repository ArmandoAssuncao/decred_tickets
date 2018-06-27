import { applyMiddleware, createStore, StoreCreator } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'
import { createFilter } from 'redux-persist-transform-filter'
import { persistStore, persistReducer, Transform } from 'redux-persist'
import constants from 'config/constants'
import ReduxThunk from 'redux-thunk'
import epicsRoot from './epicsRoot'
import reducersRoot from './reducersRoot'
import storage from 'redux-persist/es/storage'

/* save only the properties specified for each reducer */
const persistFilters = (): Array<Transform<any, any>> => {
    const ticketFilter = createFilter(
        'ticket',
        ['address', 'stakePool', 'tickets'],
    )

    return [
        ticketFilter,
    ]
}

const middlewares: any[] = [
    createEpicMiddleware(epicsRoot),
    ReduxThunk,
]

const enhancers = process.env.NODE_ENV !== 'production'
    ? composeWithDevTools({})(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares)

const persistConfig = {
    blacklist: [],
    key: constants.REDUX_PERSIST_KEY,
    storage,
    transforms: [
        ...persistFilters(),
    ],
    version: 1,
    whitelist: [
        'settings',
        'ticket',
        'user',
    ],
}

const reducers = persistReducer(persistConfig, reducersRoot)

const configureStore = (): any => {
    const create: StoreCreator = process.env.NODE_ENV !== 'production'
        ? global.reactotron.createStore
        : createStore

    const store = create(reducers, enhancers)
    const persistor = persistStore(store)

    return { persistor, store }
}

export default configureStore
