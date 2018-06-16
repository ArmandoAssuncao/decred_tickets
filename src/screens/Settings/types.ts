import { IScreenProps } from 'containers/Root/types'
import { permitNotifications } from 'store/settings/actions'
import { ISettingsState } from 'store/settings/types'

export interface IConnectedProps {
    settings?: ISettingsState
}

export interface IActionCreators {
    permitNotifications: typeof permitNotifications
}

export interface IProps extends IScreenProps, IConnectedProps, IActionCreators {
}

export interface IState {
    isNotifications: boolean
}
