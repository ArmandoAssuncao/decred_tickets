import Navigator from 'screens'
import React, { Component } from 'react'
import { StatusBar, View, } from 'react-native'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import OneSignal from 'react-native-onesignal'
import { IAppState } from 'store/types'

import { saveDeviceNotifId } from 'store/user/actions'
import env from 'config/enviroment'
import styles from './styles'
import { IActionCreators, IConnectedProps, IProps, IState } from './types'
import { resetNavigateTo } from 'helpers/navigate'

const mapStateToProps: MapStateToProps<IConnectedProps, IProps, IAppState> = (state) =>
    ({
        deviceNotifId: state.user.deviceNotifId,
        permitNotifications: state.settings.permitNotifications,
    })

const mapDispatchToProps: MapDispatchToProps<IActionCreators, IProps> = (dispatch) =>
    bindActionCreators(
        {
            saveDeviceNotifId,
        },
        dispatch,
    )

class Root extends Component<IProps, IState> {

    componentWillMount() {
        OneSignal.init(env.ONESIGNAL_KEY)
        OneSignal.inFocusDisplaying(2)
        OneSignal.setSubscription(this.props.permitNotifications)

        OneSignal.addEventListener('ids', this.onIds)
        OneSignal.configure()
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('ids', this.onIds)
    }

    onIds = (device: any): void => {
        const { deviceNotifId, saveDeviceNotifId } = this.props
        if (deviceNotifId !== device.userId) saveDeviceNotifId(device.userId)
    }

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
