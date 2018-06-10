import { ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    $borderRadius: 10,
    container: {
        backgroundColor: '$primaryColor',
        flex: 1,
    } as ViewStyle,
    scrollContentContainer: {
        padding: '0.7rem',
    } as ViewStyle,
    cardsContainer: {
        flexDirection: 'row',
    } as ViewStyle,
    input: {
        backgroundColor: '$secondColor',
        borderColor: '$secondColor',
        borderRadius: '$borderRadius',
        borderWidth: 1,
        flex: 1,
        fontSize: '1.2rem',
        paddingHorizontal: 10,
        textAlignVertical: 'top',
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: '1rem',
    } as ViewStyle,
    formContainer: {
        marginVertical: '0.8rem',
    } as ViewStyle,
    button: {
        marginLeft: '0.3rem',
    } as ViewStyle,
    pickerContainer: {
        flex: 1,
        flexDirection: 'row',
    } as ViewStyle,
})
