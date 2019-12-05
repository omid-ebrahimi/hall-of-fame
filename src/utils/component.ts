function getDisplayName(component): string {
    return component.displayName || component.name || 'Component';
}

export function getComponentName(component, wrapperName?: string): string {
    if (!wrapperName) {
        return getDisplayName(component);
    }
    return `${wrapperName}(${getDisplayName(component)})`;
}
