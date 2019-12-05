import { AxiosError } from 'axios';
import { errorAlert } from './alert';

export function onApiError(error: AxiosError): void {
    if (error.response) {
        return errorAlert(error.response.data.message);
    } else {
        return errorAlert(error.message);
    }
}
