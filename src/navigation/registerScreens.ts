import { registerComponent } from '../utils/navigation';
import { provide } from '../theme/provider';
import * as screens from '../screens';

export function registerScreens(): void {
    for (const screenName in screens) {
        screens[screenName].displayName = screenName; // This line is required for release
        registerComponent(provide, screens[screenName]);
    }

    console.info('All screens have been registered!');
}
