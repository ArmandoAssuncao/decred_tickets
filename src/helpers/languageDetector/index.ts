import { NativeModules, Platform } from 'react-native'

const language = (): string => {
    return Platform.OS === 'android'
        ? NativeModules.I18nManager.localeIdentifier
        : NativeModules.SettingsManager.settings.AppleLocale
}

export const getLanguage = () => {
    return language().substring(0, 2)
}

export const getLanguageWithRegion = () => {
    return language().replace('_', '-')
}
