export function shallowCompare(obj1, obj2): boolean {
    return (
        Object.keys(obj1).length === Object.keys(obj2).length &&
        Object.keys(obj1).every((key): boolean => obj2.hasOwnProperty(key) && obj1[key] === obj2[key])
    );
}
