import { NavigationDispatch, NavigationScreenProp } from 'react-navigation'
import { ISettingsState } from 'store/settings/types'
import { IUserState } from 'store/user/types'
import { saveDeviceNotifId } from 'store/user/actions'

export interface IActionCreators {
    saveDeviceNotifId?: typeof saveDeviceNotifId
}

export interface IConnectedProps {
    deviceNotifId?: IUserState['deviceNotifId']
    permitNotifications?: ISettingsState['permitNotifications']
}

export interface IProps extends IActionCreators, IConnectedProps {
}

export interface IState {
}

export interface IScreenProps<S = any, P = any> {
    navigation?: NavigationScreenProp<S, P>
    screenProps?: {
        resetNavigateTo?: (routeName: string, dispatch: NavigationDispatch) => void
    }
}
