import 'rxjs'
import { MiddlewareAPI } from 'redux'
import { ActionsObservable, Epic } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import { IAppState, IReduxAction } from '../types'
import * as actions from './actions'
import { IPermitNotificationsAction } from './types'

import Api from 'services/api'

export const settingsEpic: Epic<IReduxAction, IAppState> =
    (action$: ActionsObservable<IReduxAction>, store: MiddlewareAPI<any, IAppState>): Observable<IReduxAction> =>
    action$
    .ofType(actions.SETTINGS_PERMIT_NOTIFICATIONS)
    .switchMap(async (action: IPermitNotificationsAction): Promise<any> => {
        const { payload } = action
        try {
            const api = new Api()
            await api.enablePushNotification(store.getState().user.deviceNotifId, payload)

            return actions.permitNotificationsSuccess()
        } catch (e) {
            return actions.permitNotificationsFailed()
        }
    })
