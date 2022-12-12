import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

const navigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    }
}

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer theme={navigationTheme}>
                <ThemeProvider theme={theme}>
                    {/* TODO: 앱스크린 붙이면 된다. */}
                </ThemeProvider>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
