import { StyleProp, TextStyle } from 'react-native'

export interface IProps {
    children?: string
    id?: string
    m: string
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    style?: StyleProp<TextStyle>
    type?: 'bold' | 'normal'
}

export interface IState {
}
