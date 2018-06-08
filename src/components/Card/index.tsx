import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'

import { IProps, IState } from './types'
import styles from './styles'

import i18n from 'config/i18n'
import { Text } from 'components'

export default class Card extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        value: 0,
    }

    render(): JSX.Element {
        const { onPress, type, value } = this.props
        let title = null
        let img = null
        switch (type) {
            case 'revoked':
                img = require('@assets/imgs/ticket-revoked.png')
                title = i18n.t('decred.ticket.revoked', { defaultValue: 'Revoked' })
                break
            case 'voted':
                img = require('@assets/imgs/ticket-voted.png')
                title = i18n.t('decred.ticket.voted', { defaultValue: 'Voted' })
                break
            case 'expired':
                img = require('@assets/imgs/ticket-expired.png')
                title = i18n.t('decred.ticket.expired', { defaultValue: 'Expired' })
                break
            case 'missed':
                img = require('@assets/imgs/ticket-missed.png')
                title = i18n.t('decred.ticket.missed', { defaultValue: 'Missed' })
                break
            case 'unmined':
                img = require('@assets/imgs/ticket-unmined.png')
                title = i18n.t('decred.ticket.unmined', { defaultValue: 'Unmined' })
                break
            case 'immature':
                img = require('@assets/imgs/ticket-immature.png')
                title = i18n.t('decred.ticket.immature', { defaultValue: 'Immature' })
                break
            case 'live':
                img = require('@assets/imgs/ticket-live.png')
                title = i18n.t('decred.ticket.live', { defaultValue: 'Live' })
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
                <View style={styles.textContainer}>
                    <Text m={'Live'} size="md" type="bold">{title}</Text>
                    <Text m={value.toString()} size="xxl" type="bold">{value.toString()}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
