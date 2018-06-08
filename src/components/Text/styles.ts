import { TextStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    text: {
        color: '$textColor',
    } as TextStyle,
    sizeXxs: {
        fontSize: '0.6rem',
    },
    sizeXs: {
        fontSize: '0.7rem',
    },
    sizeSm: {
        fontSize: '0.9rem',
    },
    sizeMd: {
        fontSize: '1rem',
    },
    sizeLg: {
        fontSize: '1.3rem',
    },
    sizeXl: {
        fontSize: '1.7rem',
    },
    sizeXxl: {
        fontSize: '2.1rem',
    },
    typeBold: {
        fontWeight: 'bold',
    } as TextStyle,
    typeNormal: {
        fontWeight: 'normal',
    } as TextStyle,
})
