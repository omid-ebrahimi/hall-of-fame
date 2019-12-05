import { setRootComponent, setRootStack } from '../utils/navigation';
import { IntroScreen, WelcomeScreen } from '../screens';

export function setRootIntroScreen(): Promise<void> {
    return setRootComponent(IntroScreen);
}

export function setRootAppStack(): Promise<void> {
    return setRootStack('AppStack', [WelcomeScreen]);
}
