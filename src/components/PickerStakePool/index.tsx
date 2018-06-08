import React from 'react'
import { Icon, Picker } from 'native-base'

import { IProps, IState } from './types'
import styles from './styles'

import { ITicketState } from 'store/ticket/types'
import i18n from 'config/i18n'

export default class PickerStakePool extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        onChange: null,
    }

    render(): JSX.Element {
        const { onChange, value } = this.props

        const stakePools: Array<ITicketState['stakePool']> = [
            'decredBrasil',
        ]

        const textType = 'StakePool'

        return (
            <Picker
                mode="dropdown"
                iosHeader={i18n.t('components.picker.header', {type: textType})}
                headerBackButtonText={i18n.t('components.picker.backBtn')}
                iosIcon={<Icon name="ios-arrow-down-outline" color="black" />}
                placeholder={i18n.t('components.picker.placeholder', {type: textType})}
                style={styles.picker}
                selectedValue={value}
                onValueChange={onChange}
            >
                <Picker.Item
                    label={i18n.t('components.picker.header', {type: textType}).toUpperCase()}
                    value={null}
                />
                {
                    stakePools.map((stake, i) => (
                        <Picker.Item
                            key={i.toString()}
                            label={i18n.t(`decred.stakePools.${stake}`)}
                            value={stake}
                        />
                    ))
                }
            </Picker>
        )
    }
}
