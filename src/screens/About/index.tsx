import React from 'react'
import { Clipboard, Linking, ScrollView, TouchableOpacity, View } from 'react-native'
import { NavigationScreenConfig } from 'react-navigation'
import { connect, MapDispatchToProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IAppState } from 'store/types'

import i18n from 'config/i18n'
import constants from 'config/constants'

import { IActionCreators, IConnectedProps, IProps, IState, } from './types'
import styles from './styles'

import { Text } from 'components'

const mapStateToProps = (_state: IAppState): IConnectedProps =>
  ({})

const mapDispatchToProps = (dispatch: any): MapDispatchToProps<IActionCreators, IProps> =>
    bindActionCreators(
        {},
        dispatch
    )

export class About extends React.PureComponent<IProps, IState> {
    static navigationOptions: NavigationScreenConfig<any> = {
        title: i18n.t('screens.about.title'),
    }

    private onPressOpenLink = (): void => {
        const githubLink = constants.REPO_URL
        Linking.openURL(githubLink)
        .catch(() => alert(i18n.t('app.errorOpenURL', {link: githubLink})))
    }

    private onPressCopyToClipboard = (): void => {
        Clipboard.setString(constants.DECRED_WALLET_ADDRESS)
        alert(i18n.t('app.clipboardCopy'))
    }

    render(): JSX.Element {
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContentContainer}>
                <View style={styles.textContainer}>
                    <Text m="Decred Tickets" size="xl" style={styles.text}>{constants.APP_NAME}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text id={'screens.about.createdBy'} m="Created By" style={styles.text} />
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.sourceContainer}>
                        <Text id={'screens.about.source'} m="Source Code" style={styles.text} />
                        <TouchableOpacity onPress={this.onPressOpenLink}>
                            <Text id={'app.github'} m="Github" style={styles.textLink} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={this.onPressCopyToClipboard} style={styles.walletContainer}>
                        <Text id={'screens.about.leave'} m="If you liked it, leave DCRs ;-)" style={styles.text} />
                        <Text m="" type="bold" style={styles.text}>{constants.DECRED_WALLET_ADDRESS}</Text>
                        <Text id={'app.clickToCopy'} m="Click To Copy" size="xs" style={styles.text} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
