import { ComponentType } from 'react';
import { Navigation, LayoutStackChildren, Options, Layout } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { getComponentName } from './component';
import { NonNavigationProps, Screen, NavigationProps } from '../navigation/types';
import { LayoutBottomTabsChildren } from 'react-native-navigation/lib/src/interfaces/Layout';

export function createLayoutComponent<P>(
    screen: Screen<P>,
    passProps?: NonNavigationProps<P>,
): Layout<NonNavigationProps<P>> {
    const { id, options } = screen;
    return {
        component: {
            id,
            name: getComponentName(screen),
            passProps,
            options: options && options(passProps),
        },
    };
}

export function createLayoutStack(id: string, children: LayoutStackChildren[], options?: Options): Layout {
    return {
        stack: {
            id,
            children,
            options,
        },
    };
}

function createLayoutBottomTabs(id: string, children: LayoutBottomTabsChildren[], options?: Options): Layout {
    return {
        bottomTabs: {
            id,
            children,
            options,
        },
    };
}

export function setRoot(root: Layout): Promise<void> {
    return Navigation.setRoot({
        root,
    });
}

export function setRootComponent<P>(component: Screen<P>): Promise<void> {
    return setRoot(createLayoutComponent(component));
}

export function setRootStack(id, components: Screen<NavigationProps>[]): Promise<void> {
    return setRoot(createLayoutStack(id, components.map(createLayoutComponent)));
}

export function setRootBottomTabs(id, tabs: LayoutBottomTabsChildren[], options?: Options): Promise<void> {
    return setRoot(createLayoutBottomTabs(id, tabs, options));
}

export function push<P>(
    currentComponentId: string,
    component: ComponentType<P>,
    props?: NonNavigationProps<P>,
): Promise<void> {
    return Navigation.push(currentComponentId, createLayoutComponent(component, props));
}

export function pop(currentComponentId: string): Promise<void> {
    return Navigation.pop(currentComponentId);
}

export function popToRoot(currentComponentId: string): Promise<void> {
    return Navigation.popToRoot(currentComponentId);
}

export function popTo(targetComponentId: string): Promise<void> {
    return Navigation.popTo(targetComponentId);
}

export function registerComponent<P>(provider: Function, component: ComponentType<P>): void {
    Navigation.registerComponent(
        getComponentName(component),
        (): ComponentType<P> => gestureHandlerRootHOC(provider(component)),
    );
}
