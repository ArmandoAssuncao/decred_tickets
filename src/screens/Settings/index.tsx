import React from 'react'
import { ScrollView, Switch, View } from 'react-native'
import { NavigationScreenConfig } from 'react-navigation'
import { connect, MapDispatchToProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import OneSignal from 'react-native-onesignal'
import { IAppState } from 'store/types'

import i18n from 'config/i18n'
import { permitNotifications } from 'store/settings/actions'
import { Text } from 'components'

import { IActionCreators, IConnectedProps, IProps, IState, } from './types'
import styles from './styles'

const mapStateToProps = (state: IAppState): IConnectedProps =>
  ({
      settings: state.settings,
  })

const mapDispatchToProps = (dispatch: any): MapDispatchToProps<IActionCreators, IProps> =>
    bindActionCreators(
        {
            permitNotifications,
        },
        dispatch
    )

export class Settings extends React.PureComponent<IProps, IState> {
    static navigationOptions: NavigationScreenConfig<any> = {
        title: i18n.t('screens.settings.title'),
    }

    constructor(props: IProps) {
        super(props)

        this.state = {
            isNotifications: props.settings.permitNotifications,
        }
    }

    private onChangeNotifications = (value: boolean): void => {
        this.setState({ isNotifications: value })
        this.props.permitNotifications(value)
        OneSignal.setSubscription(value)
    }

    render(): JSX.Element {
        const { isNotifications } = this.state
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContentContainer}>
                <View style={styles.notificationContainer}>
                    <Text
                        id={'screens.settings.notifications'}
                        m="Notifications"
                        type="bold"
                        style={styles.text}
                    />
                    <Switch value={isNotifications} onValueChange={this.onChangeNotifications} />
                </View>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
