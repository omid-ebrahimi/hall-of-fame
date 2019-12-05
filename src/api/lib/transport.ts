import axios from 'axios';
import { API_ADDRESS } from '../address';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export function getEndPointPath(path: string): string {
    return API_ADDRESS + '/' + path;
}
