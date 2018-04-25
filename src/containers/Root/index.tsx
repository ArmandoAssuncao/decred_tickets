import Navigator from 'pages'
import React, { Component } from 'react'
import { StatusBar, View, } from 'react-native'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IAppState } from 'store/types'

import styles from './styles'
import { IActionCreators, IConnectedProps, IProps, IState } from './types'
import { resetNavigateTo } from 'helpers/navigate'

const mapStateToProps: MapStateToProps<IConnectedProps, IProps, IAppState> = (_state) => ({
})
const mapDispatchToProps: MapDispatchToProps<IActionCreators, IProps> = (dispatch) =>
    bindActionCreators(
        {},
        dispatch,
    )

class Root extends Component<IProps, IState> {

    render(): JSX.Element {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} barStyle="light-content" />
                <Navigator
                    screenProps={{
                        resetNavigateTo,
                    }}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
