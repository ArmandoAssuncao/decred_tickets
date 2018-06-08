import { ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    container: {
        backgroundColor: '$secondColor',
        padding: '0.5rem',
        margin: '0.2rem',
        flexDirection: 'row',
        borderRadius: 5,
        flex: 1,
    } as ViewStyle,
    image: {
        height: 50,
        width: 50,
    } as ViewStyle,
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,
    textContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,
})
