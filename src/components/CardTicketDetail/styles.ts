import { ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    container: {
        backgroundColor: '$secondColor',
        padding: '0.8rem',
        margin: '0.2rem',
        flexDirection: 'row',
        borderRadius: 5,
        flex: 1,
    } as ViewStyle,
    image: {
        height: 30,
        width: 30,
    } as ViewStyle,
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: '0.6rem',
    } as ViewStyle,
    transactionContainer: {
        marginTop: '0.4rem',
    } as ViewStyle,
})
