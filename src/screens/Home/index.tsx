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

import { Button, Card, PickerStakePool } from 'components'

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
    static navigationOptions: NavigationScreenConfig<any> = {
        title: i18n.t('screens.home.title'),
    }

    constructor(props: IProps) {
        super(props)

        this.state = {
            stakePool: props.ticket.stakePool,
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

    private onChangePicker = (stakePool: ITicketState['stakePool']): void => {
        this.setState({ stakePool })
    }

    private onChangeInputValue = (ticketAddress: string): void => {
        this.setState({ ticketAddress })
    }

    private onPressButton = (): void => {
        const { stakePool, ticketAddress } = this.state
        this.validAndGetTicket(ticketAddress, stakePool)
    }

    render(): JSX.Element {
        const { stakePool, ticketAddress } = this.state
        const tickets = this.treatTicket(this.props.ticket.tickets)

        return (
            <ScrollView style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.pickerContainer}>
                        <PickerStakePool value={stakePool} onChange={this.onChangePicker} />
                    </View>
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
                <View style={styles.cardsContainer}>
                    <Card type={'revoked'} value={tickets.revokeds.length} />
                    <Card type={'voted'} value={tickets.voteds.length} />
                </View>
                <View style={styles.cardsContainer}>
                    <Card type={'expired'} value={tickets.expireds.length} />
                    <Card type={'missed'} value={tickets.misseds.length} />
                </View>
                <View style={styles.cardsContainer}>
                    <Card type={'unmined'} value={tickets.unmineds.length} />
                    <Card type={'immature'} value={tickets.immatures.length} />
                </View>
                <View style={styles.cardsContainer}>
                    <Card type={'live'} value={tickets.lives.length} />
                </View>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
