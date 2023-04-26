import { apiUrl } from '../../config';
import { IPeople } from 'swapi-ts';
import { objectToQuery } from '../../utils';
import { PeoplesResponse } from '../../types';

interface GetPeoplesParams {
    page: number;
    search: string;
}

interface GetPeopleParams {
    id: string;
};

class Api {
    private static async get(url: string, options?: RequestInit) {
        return await fetch(`${apiUrl}/${url}`, options);
    }

    public async getPeoples(params: GetPeoplesParams, options: RequestInit = {}): Promise<PeoplesResponse | undefined> {
        try {
            const query = objectToQuery(params);
            const response = await Api.get(`people/${query}`, options);

            return response.json();
        } catch (e: any) {
            if (e.name === 'AbortError') return;

            console.error(e);
        }
    }

    public async getPeople(params: GetPeopleParams, options: RequestInit = {}): Promise<IPeople | undefined> {
        try {
            const response = await Api.get(`people/${params.id}`, options);

            return response.json();
        } catch (e: any) {
            if (e.name === 'AbortError') return;

            console.error(e);
        }
    }
}

export default Api;
