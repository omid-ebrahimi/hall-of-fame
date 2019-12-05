import { setRootComponent } from '../utils/navigation';
import { IntroScreen } from '../screens';

export function setRootIntroScreen(): Promise<void> {
    return setRootComponent(IntroScreen);
}
