import { Selector } from 'reselect'
import { IAppState } from '../types'
import { IUserState } from './types'

export const selectUser: Selector<IAppState, IUserState> = (
    state: IAppState
): IUserState => state.user
