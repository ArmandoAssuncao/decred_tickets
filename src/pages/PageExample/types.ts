import { IScreenProps } from 'containers/Root/types'
import { getUser } from 'store/user/actions'
import { IUserState } from 'store/user/types'

export interface IConnectedProps {
    user?: IUserState
}

export interface IActionCreators {
    getUser: typeof getUser
}

export interface IProps extends IScreenProps, IConnectedProps, IActionCreators {
}

export interface IState {
}
