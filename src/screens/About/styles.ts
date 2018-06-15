import { ViewStyle, TextStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    container: {
        backgroundColor: '$primaryColor',
        flex: 1,
    } as ViewStyle,
    scrollContentContainer: {
        alignItems: 'center',
        flex: 1,
        padding: '0.4rem',
    } as ViewStyle,
    text: {
        color: '$textColorSecond',
    } as TextStyle,
    sourceContainer: {
        flexDirection: 'row',
    } as ViewStyle,
    textContainer: {
        margin: '0.9rem',
    } as ViewStyle,
    textLink: {
        color: '$textColorLink',
        marginLeft: '0.5rem',
        textDecorationLine: 'underline',
    } as TextStyle,
    walletContainer: {
        alignItems: 'center',
    } as TextStyle,
})
