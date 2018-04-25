import 'rxjs'
import { MiddlewareAPI } from 'redux'
import { ActionsObservable, Epic } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

import { IAppState, IReduxAction } from '../types'
import * as actions from './actions'

import Api from 'requests/api'

export const userEpic: Epic<IReduxAction, IAppState> =
    (action$: ActionsObservable<IReduxAction>, _store: MiddlewareAPI<IAppState>): Observable<IReduxAction> =>
    action$
    .ofType(actions.GET_USER_PENDING)
    .switchMap(async (): Promise<IReduxAction> => {
        try {
            const api = new Api()
            const res = await api.getUser()
            return actions.getUserSuccess(res.data)
        } catch {
            return actions.getUserFailed()
        }
    })
