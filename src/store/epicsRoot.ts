import 'rxjs/Rx'
import { combineEpics } from 'redux-observable'
import { IAppState, IReduxAction } from './types'

import { settingsEpic } from './settings/epic'
import { ticketEpic } from './ticket/epic'

const epics = [
    settingsEpic,
    ticketEpic,
]

export default combineEpics<IReduxAction, IAppState>(...epics)
