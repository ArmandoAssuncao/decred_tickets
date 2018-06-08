import { Action, AnyAction } from 'redux'
import { ActionsObservable, Epic } from 'redux-observable'
import { Subject } from 'rxjs'
import { IAppState } from 'store/types'

const wrapperTestEpic = (
    epic: Epic<any, IAppState>,
    epicDependencies: any,
    count: number,
    action: AnyAction | AnyAction[],
    callback: (acts: any) => void,
    state: any = {},
): void => {
    const actions = new Subject<Action>()
    const actions$ = new ActionsObservable(actions)
    const store = { dispatch: callback, getState: (): IAppState => state }
    epic(actions$, (store as any), epicDependencies) // TODO: remove "as any" when redux-observable has a compatible version
        .take(count)
        .toArray()
        .subscribe(callback)

    if (action instanceof Array) {
        action.map((act: any) => actions.next(act))
    } else {
        actions.next(action)
    }
}

export default wrapperTestEpic
