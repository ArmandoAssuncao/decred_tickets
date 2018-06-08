import { NavigationDispatch, NavigationScreenProp } from 'react-navigation'

export interface IActionCreators {
}

export interface IConnectedProps {
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
