import React from 'react'
import { View } from 'react-native'
import { NavigationScreenConfig } from 'react-navigation'
import { connect, MapDispatchToProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IAppState } from 'store/types'

import i18n from 'config/i18n'
import { getUser } from 'store/user/actions'

import { IActionCreators, IConnectedProps, IProps, IState, } from './types'
import styles from './styles'

import { Text } from 'components'

const mapStateToProps = (state: IAppState): IConnectedProps =>
  ({
    user: state.user,
  })

const mapDispatchToProps = (dispatch: any): MapDispatchToProps<IActionCreators, IProps> =>
    bindActionCreators(
        {
            getUser,
        },
        dispatch
    )

export class PageExample extends React.Component<IProps, IState> {
    static navigationOptions: NavigationScreenConfig<any> = {
        title: i18n.t('pages.pageExample.title'),
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUser()
    }

    render(): JSX.Element {
        return(
            <View style={styles.container}>
                <Text id={'app.name'} m="default message" />
                <Text m="default message">Description</Text>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageExample)
