import { ComponentType } from 'react';
import { Options } from 'react-native-navigation';

export interface NavigationProps {
    componentId: string;
}

export type NonNavigationProps<Props> = Omit<Props, keyof NavigationProps>;

interface NavigationComponent<Props> {
    id?: string;
    displayName?: string;
    options?: (passProps?: NonNavigationProps<Props>) => Options;
}

export type Screen<Props = {}> = ComponentType<Props> & NavigationComponent<Props>;
