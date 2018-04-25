import { NavigationDispatch } from 'react-navigation'

export interface IActionCreators {
}

export interface IConnectedProps {
}

export interface IProps extends IActionCreators, IConnectedProps {
}

export interface IState {
}

export interface IScreenProps {
    screenProps?: {
        resetNavigateTo?: (routeName: string, dispatch: NavigationDispatch) => void
    }
}
