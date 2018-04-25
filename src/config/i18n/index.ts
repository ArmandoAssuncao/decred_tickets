import i18next from 'i18next'
import env from 'config/enviroment'
import { languageDetector } from 'helpers'
import ptBR from './locales/ptBR'
import en from './locales/en'

const format = (value: any, formatType: string, _lng: string): string => {
    if (typeof value === 'string') {
        switch (formatType) {
            case 'capitalize':
                return value.toLowerCase().replace(/(?:^|\s)\S/g, (a: string) => a.toUpperCase())
            case 'lowercase': return value.toLowerCase()
            case 'uppercase': return value.toUpperCase()
            default:
                return value
        }
    }
    return value
}

i18next
.use(env.LANGUAGE.DEFAULT_LOCALE || languageDetector.getLanguage())
.init({
    debug: false,
    fallbackLng: {
        default: ['en'],
    },
    interpolation: {
        format,
    },
    resources: {
        'en': { translation: en },
        'pt-BR': { translation: ptBR },
    },
})

export default i18next
