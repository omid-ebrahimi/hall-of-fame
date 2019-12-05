import { useRef, useState } from 'react';
import { BackHandler, NativeEventSubscription } from 'react-native';
import { useNavigationComponentDidAppear, useNavigationComponentDidDisappear } from 'react-native-navigation-hooks';

export function useBackHandler(componentId): [boolean, Function] {
    const [backRequested, setBackRequested] = useState(false);
    const backHandler = useRef<NativeEventSubscription>();
    useNavigationComponentDidAppear((): void => {
        backHandler.current = BackHandler.addEventListener(
            'hardwareBackPress',
            (): boolean => {
                setBackRequested(true);
                return true;
            },
        );
    }, componentId);
    useNavigationComponentDidDisappear((): void => {
        backHandler.current && backHandler.current.remove();
    }, componentId);
    return [backRequested, setBackRequested];
}
