import React from 'react'
import { ScrollView, TextInput, View } from 'react-native'
import { NavigationScreenConfig } from 'react-navigation'
import EStyleSheet from 'react-native-extended-stylesheet'
import { connect, MapDispatchToProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IAppState } from 'store/types'

import i18n from 'config/i18n'
import { getTicket } from 'store/ticket/actions'
import { ITicketState, ITicket } from 'store/ticket/types'

import { IActionCreators, IConnectedProps, IProps, IState, } from './types'
import styles from './styles'

import { Button, Card, IconDrawerMenu } from 'components'

const mapStateToProps = (state: IAppState): IConnectedProps =>
  ({
    ticket: state.ticket,
  })

const mapDispatchToProps = (dispatch: any): MapDispatchToProps<IActionCreators, IProps> =>
    bindActionCreators(
        {
            getTicket,
        },
        dispatch
    )

export class Home extends React.PureComponent<IProps, IState> {
    static navigationOptions: NavigationScreenConfig<any> = ({ navigation, navigationOptions }) => ({
        title: i18n.t('screens.home.title'),
        headerLeft: (
            <IconDrawerMenu color={navigationOptions.headerTintColor} onPress={navigation.openDrawer} />
        ),
    })

    constructor(props: IProps) {
        super(props)

        this.state = {
            stakePool: 'decredBrasil',
            ticketAddress: props.ticket.address,
        }
    }

    componentDidMount() {
        const { ticket } = this.props
        this.validAndGetTicket(ticket.address, ticket.stakePool)
    }

    private treatTicket(tickets: ITicket[]): any {
        const ticketsExpired = tickets.filter((ticket) => ticket.status === 'expired')
        const ticketsImmature = tickets.filter((ticket) => ticket.status === 'immature')
        const ticketsLive = tickets.filter((ticket) => ticket.status === 'live')
        const ticketsMissed = tickets.filter((ticket) => ticket.status === 'missed')
        const ticketsRevoked = tickets.filter((ticket) => ticket.status === 'revoked')
        const ticketsUnmined = tickets.filter((ticket) => ticket.status === 'unmined')
        const ticketsVoted = tickets.filter((ticket) => ticket.status === 'voted')

        return {
            expireds: ticketsExpired,
            immatures: ticketsImmature,
            lives: ticketsLive,
            misseds: ticketsMissed,
            revokeds: ticketsRevoked,
            unmineds: ticketsUnmined,
            voteds: ticketsVoted,
        }
    }

    private validAndGetTicket = (address: string, stakePool: ITicketState['stakePool']): void => {
        if (address && stakePool) {
            this.props.getTicket(address, stakePool)
        }
    }

    private onChangeInputValue = (ticketAddress: string): void => {
        this.setState({ ticketAddress })
    }

    private onPressButton = (): void => {
        const { stakePool, ticketAddress } = this.state
        this.validAndGetTicket(ticketAddress, stakePool)
    }

    private onPressCard = (tickets: any): void => {
        this.props.navigation.navigate('TicketDetails', { tickets })
    }

    private renderCardTickets = (): JSX.Element => {
        const tickets = this.treatTicket(this.props.ticket.tickets)
        const { revokeds, voteds, expireds, misseds, unmineds, immatures, lives } = tickets

        return (
            <View>
                <View style={styles.cardsContainer}>
                    <Card type={'revoked'} value={revokeds.length} onPress={() => this.onPressCard(revokeds)} />
                    <Card type={'voted'} value={voteds.length} onPress={() => this.onPressCard(voteds)} />
                </View>
                <View style={styles.cardsContainer}>
                    <Card type={'expired'} value={expireds.length} onPress={() => this.onPressCard(expireds)} />
                    <Card type={'missed'} value={misseds.length} onPress={() => this.onPressCard(misseds)} />
                </View>
                <View style={styles.cardsContainer}>
                    <Card type={'unmined'} value={unmineds.length} onPress={() => this.onPressCard(unmineds)} />
                    <Card type={'immature'} value={immatures.length} onPress={() => this.onPressCard(immatures)} />
                </View>
                <View style={styles.cardsContainer}>
                    <Card type={'live'} value={lives.length} onPress={() => this.onPressCard(lives)} />
                </View>
            </View>
        )
    }

    render(): JSX.Element {
        const { ticketAddress } = this.state

        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContentContainer}>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            multiline={true}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            autoCorrect={false}
                            blurOnSubmit={true}
                            numberOfLines={2}
                            placeholder={i18n.t('screens.home.input.placeholder')}
                            placeholderTextColor={EStyleSheet.value('$placeholderColor')}
                            returnKeyType="done"
                            selectTextOnFocus={true}
                            onChangeText={this.onChangeInputValue}
                            value={ticketAddress}
                        />
                        <Button
                            m={'OK'}
                            onPress={this.onPressButton}
                            title={i18n.t('screens.home.btn')}
                        />
                    </View>
                </View>
                {this.renderCardTickets()}
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
