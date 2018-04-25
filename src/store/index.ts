import { applyMiddleware, createStore, StoreCreator } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'
import { createFilter } from 'redux-persist-transform-filter'
import { persistStore, persistReducer, Transform } from 'redux-persist'
import constants from 'config/constants'
import ReduxThunk from 'redux-thunk'
import rootEpic from './rootEpic'
import rootReducer from './rootReducer'
import storage from 'redux-persist/es/storage'

/* save only the properties specified for each reducer */
const persistFilters = (): Array<Transform<any, any>> => {
    const userFilter = createFilter(
        'user',
        ['name'],
    )

    return [
        userFilter,
    ]
}

const middlewares: any[] = [
    createEpicMiddleware(rootEpic),
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
        'user',
    ],
}

const reducers = persistReducer(persistConfig, rootReducer)

const configureStore = (): any => {
    const create: StoreCreator = process.env.NODE_ENV !== 'production'
        ? global.reactotron.createStore
        : createStore

    const store = create(reducers, enhancers)
    const persistor = persistStore(store)

    return { persistor, store }
}

export default configureStore
