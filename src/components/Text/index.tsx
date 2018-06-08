import React from 'react'
import { Text as RNText } from 'react-native'

import { IProps, IState } from './types'
import styles from './styles'

import i18n from 'config/i18n'

export default class Text extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        size: 'md',
        type: 'normal',
    }

    constructor(props) {
        super(props)
    }

    private getSizeStyle = (size: IProps['size']): any => {
        switch (size) {
            case 'xxs':
                return styles.sizeXxs
            case 'xs':
                return styles.sizeXs
            case 'sm':
                return styles.sizeSm
            case 'md':
                return styles.sizeMd
            case 'lg':
                return styles.sizeLg
            case 'xl':
                return styles.sizeXl
            case 'xxl':
                return styles.sizeXxl
            default:
                return styles.sizeMd
        }
    }

    private getTypeStyle = (type: IProps['type']): any => {
        switch (type) {
            case 'bold':
                return styles.typeBold
            case 'normal':
                return styles.typeNormal
            default:
                return styles.typeNormal
        }
    }

    render(): JSX.Element {
        const { children, id, m, size, style, type } = this.props
        const textSizeStyle = this.getSizeStyle(size)
        const textTypeStyle = this.getTypeStyle(type)

        return id
            ? (
                <RNText style={[styles.text, textSizeStyle, textTypeStyle, style]}>
                    {i18n.t(id, { defaultValue: m })}
                </RNText>
            ) : (
                <RNText style={[styles.text, textSizeStyle, textTypeStyle, style]}>
                    {children || m}
                </RNText>
            )
    }
}
