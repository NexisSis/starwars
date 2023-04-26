import { IPeople } from 'swapi-ts';

export interface PeoplesResponse {
    results: IPeople[];
    count: number;
}
