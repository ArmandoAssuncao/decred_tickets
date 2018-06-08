import React from 'react'
import { TouchableOpacity } from 'react-native'

import { IProps, IState } from './types'
import styles from './styles'

import { Text } from 'components'

export default class Card extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        onPress: null,
    }

    render(): JSX.Element {
        const { m, onPress, title } = this.props

        // TODO: get color from theme
        return (
            <TouchableOpacity
                onPress={onPress}
                style={styles.container}
            >
                <Text m={m} style={{color: 'white'}}>{title}</Text>
            </TouchableOpacity>
        )
    }
}
