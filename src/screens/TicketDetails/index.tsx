import React from 'react'
import { ScrollView, View } from 'react-native'
import { NavigationScreenConfig } from 'react-navigation'
import { connect, MapDispatchToProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IAppState } from 'store/types'

import i18n from 'config/i18n'

import { IActionCreators, IConnectedProps, IProps, IState, } from './types'
import styles from './styles'

import { CardTicketDetail, Text } from 'components'

const mapStateToProps = (_state: IAppState): IConnectedProps =>
  ({})

const mapDispatchToProps = (dispatch: any): MapDispatchToProps<IActionCreators, IProps> =>
    bindActionCreators(
        {},
        dispatch
    )

export class TicketDetails extends React.PureComponent<IProps, IState> {
    static navigationOptions: NavigationScreenConfig<any> = {
        title: i18n.t('screens.ticketDetails.title'),
    }

    renderCardTickets = (): JSX.Element | JSX.Element[] => {
        const { tickets } = this.props.navigation.state.params
        return Array.isArray(tickets) && tickets.length
            ? tickets.map((ticket, i) => <CardTicketDetail ticket={ticket} key={i.toString()} />)
            : (
                <View style={styles.notFoundContainer}>
                    <Text
                        size="xl"
                        m="No tickets found"
                        id={'screens.ticketDetails.noTicketsFound'}
                        style={styles.notFound}
                    />
                </View>
            )
    }

    render(): JSX.Element {
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContentContainer}>
                {this.renderCardTickets()}
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetails)
