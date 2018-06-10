import { ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    $borderRadius: 10,
    container: {
        backgroundColor: '$primaryColor',
        flex: 1,
    } as ViewStyle,
    scrollContentContainer: {
        padding: '0.4rem',
    } as ViewStyle,
    notFoundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,
    notFound: {
        color: '$textColorSecond',
    },
})
