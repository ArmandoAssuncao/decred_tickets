import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import moment from 'moment'

import { IProps, IState } from './types'
import styles from './styles'
import _ from 'lodash'

import { Text } from 'components'

export default class CardTicketDetail extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
    }

    render(): JSX.Element {
        const { onPress, ticket } = this.props
        let img = null
        switch (ticket.status) {
            case 'revoked':
                img = require('@assets/imgs/ticket-revoked.png')
                break
            case 'voted':
                img = require('@assets/imgs/ticket-voted.png')
                break
            case 'expired':
                img = require('@assets/imgs/ticket-expired.png')
                break
            case 'missed':
                img = require('@assets/imgs/ticket-missed.png')
                break
            case 'unmined':
                img = require('@assets/imgs/ticket-unmined.png')
                break
            case 'immature':
                img = require('@assets/imgs/ticket-immature.png')
                break
            case 'live':
                img = require('@assets/imgs/ticket-live.png')
                break
            default:
                break
        }

        return (
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={img}
                    />
                </View>
                {
                    _.isObject(ticket)
                    ? (
                        <View style={styles.textContainer}>
                            <Text m={'--'} size="xl" type="bold">{ticket.ticketPrice.toString()}</Text>
                            <Text m={'--'} size="md">{moment(ticket.buyTime).format('LLL')}</Text>
                            <View style={styles.transactionContainer}>
                                <Text
                                    m={'Transaction'}
                                    id={'components.cardTicketDetails.transaction'}
                                    size="md"
                                />
                                <Text m={'--'} size="md">{ticket.buyTxId}</Text>
                            </View>
                        </View>
                    ) : null
                }
            </TouchableOpacity>
        )
    }
}
