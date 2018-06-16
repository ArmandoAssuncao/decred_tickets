import { Selector } from 'reselect'
import { IAppState } from '../types'
import { ISettingsState } from './types'

export const selectSettings: Selector<IAppState, ISettingsState> = (
    state: IAppState
): ISettingsState => state.settings
