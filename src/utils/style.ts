import { Platform } from 'react-native';

export function getShadowStyle(elevation: number): object {
    return Platform.select({
        android: {
            elevation,
            backgroundColor: 'white',
        },
        default: {
            shadowOpacity: 0.0015 * elevation + 0.18,
            shadowRadius: 0.54 * elevation,
            shadowOffset: {
                height: 0.6 * elevation,
            },
        },
    });
}
