import * as languageDetector from '../index'

describe('LanguageDetector', () => {
    it('#getLanguage', () => {
        expect(languageDetector.getLanguage()).toEqual('en')
    })
})
