export function parse<T>(text: string | null, defaultValue: T): T {
    try {
        if (text) {
            return JSON.parse(text) as T;
        }
    } catch (error) {
        console.error(error);
    }
    return defaultValue;
}
