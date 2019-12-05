import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './index';
import { getComponentName } from '../utils/component';

export function provide(Component): React.FunctionComponent {
    function wrapper(props): JSX.Element {
        return (
            <ThemeProvider theme={theme}>
                <Component {...props} />
            </ThemeProvider>
        );
    }
    wrapper.displayName = getComponentName(Component, 'WithTheme');
    return wrapper;
}
