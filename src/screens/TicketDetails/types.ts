import { IScreenProps } from 'containers/Root/types'
import { ITicket } from 'store/ticket/types'

export interface IConnectedProps {
}

export interface IActionCreators {
}

export interface IProps extends IScreenProps<INavigationState>, IConnectedProps, IActionCreators {
}

export interface IState {
}

export interface INavigationState {
    params: {
        tickets: ITicket[]
    }
}
