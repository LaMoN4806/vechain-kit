import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all language JSON files
import en from './src/app/languages/en.json';
import de from './src/app/languages/de.json';
import it from './src/app/languages/it.json';
import fr from './src/app/languages/fr.json';
import es from './src/app/languages/es.json';
import zh from './src/app/languages/zh.json';
import ja from './src/app/languages/ja.json';

// Define supported languages
export const supportedLanguages = ['en', 'de', 'it', 'fr', 'es', 'zh', 'ja'];

export const resources = {
    en: { translation: en },
    de: { translation: de },
    it: { translation: it },
    fr: { translation: fr },
    es: { translation: es },
    zh: { translation: zh },
    ja: { translation: ja },
};

// Language names mapping
export const languageNames = {
    en: 'English',
    de: 'Deutsch',
    it: 'Italiano',
    fr: 'Français',
    es: 'Español',
    zh: '中文',
    ja: '日本語',
};

// Simplified initialization without language detection
i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // Force English as default
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
