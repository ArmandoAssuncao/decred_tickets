import { TextStyle, ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    container: {
        backgroundColor: '$primaryColor',
        flex: 1,
    } as ViewStyle,
    scrollContentContainer: {
        padding: '0.4rem',
    } as ViewStyle,
    text: {
        color: '$textColorSecond',
    } as TextStyle,
    notificationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    } as ViewStyle,
})
