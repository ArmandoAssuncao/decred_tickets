import 'rxjs/Rx'
import { combineEpics } from 'redux-observable'
import { IAppState, IReduxAction } from './types'

import { ticketEpic } from './ticket/epic'

const epics = [
    ticketEpic,
]

export default combineEpics<IReduxAction, IAppState>(...epics)
