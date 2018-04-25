import 'rxjs/Rx'
import { combineEpics, Epic } from 'redux-observable'
import { IAppState, IReduxAction } from './types'

import { userEpic } from './user/epic'

const epics = [
    userEpic,
]

const rootEpic: Epic<IReduxAction, IAppState> = combineEpics(...epics)

export default rootEpic
