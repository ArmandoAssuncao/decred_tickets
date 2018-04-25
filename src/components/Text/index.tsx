import React from 'react'
import { Text as RNText } from 'react-native'

import { IProps, IState } from './types'
import styles from './styles'

import i18n from 'config/i18n'

export default class Text extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
    }

    constructor(props) {
        super(props)
    }

    render(): JSX.Element {
        const { children, id, m } = this.props
        return id
            ? <RNText style={styles.text}>{i18n.t(id, { defaultValue: m })}</RNText>
            : <RNText style={styles.text}>{children}</RNText>
    }
}
