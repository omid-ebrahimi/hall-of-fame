import axios from 'axios';
import { getEndPointPath } from '../lib/transport';
import { FameDto, GetFameListResponse } from './types/fame';

export async function getFameList(): Promise<FameDto[]> {
    return (await axios.get<GetFameListResponse>(getEndPointPath('fames?guest=true'))).data.data.list;
}
