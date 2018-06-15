import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import { IProps, IState } from './types'
import styles from './styles'

export default class IconDrawerMenu extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        size: 25,
    }

    render(): JSX.Element {
        const { color, onPress, size } = this.props
        return (
            <Icon
                name="bars"
                size={size}
                color={color}
                onPress={onPress}
                style={styles.container}
            />
        )
    }
}
