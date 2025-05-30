import { extendTheme } from '@chakra-ui/react';
import { cardTheme } from './card';
import { ButtonStyle } from './button';
import { modalTheme } from './modal';
import { themeColors } from './colors';

const exampleTheme = {
    components: {
        Card: cardTheme,
        Button: ButtonStyle,
        Modal: modalTheme,
    },
    cssVarPrefix: 'example',
    addPrefix: true,
    prefix: 'example',

    // Color mode configuration
    initialColorMode: 'dark',
    useSystemColorMode: false,

    semanticTokens: {
        colors: {
            'chakra-body-text': {
                _dark: '#FFFFFF', // Added dark mode text color
                _light: '#1E1E1E',
            },
            'chakra-body-bg': {
                _dark: '#1A1A1A', // Added dark mode background color
                _light: '#FFFFFF',
            },
        },
    },
    borderRadius: {
        card: '16px',
        button: '24px',
    },
    shadows: {
        card: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    },
    //@ts-ignore
    fonts: {
        heading: `"Instrument Sans Variable", sans-serif`,
        body: `"Inter Variable", sans-serif`,
    },
};

export const darkTheme = extendTheme({
    ...exampleTheme,
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    prefix: 'example',
    colors: themeColors,
    addPrefix: true,
    cssVarPrefix: 'example',
});
