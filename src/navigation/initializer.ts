import { registerScreens } from './registerScreens';
import { Navigation } from 'react-native-navigation';
import { defaultOptions } from './defaultOptions';

export function initializeApp(setRootFunction): void {
    registerScreens();
    Navigation.setDefaultOptions(defaultOptions);
    Navigation.events().registerAppLaunchedListener(setRootFunction);
}
