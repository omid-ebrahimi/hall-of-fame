import { Alert } from 'react-native';

export function errorAlert(message: string): void {
    Alert.alert('Error', message, [{ text: 'OK' }], { cancelable: true });
}

export function notAvailableAlert(): void {
    Alert.alert('Not Available', 'Coming Soon...', [{ text: 'OK' }], { cancelable: true });
}
