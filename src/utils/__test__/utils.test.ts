import { objectToQuery, getIdFromUrl } from '../index';

test('getIdFromUrl should return correct id', async () => {
    const url = 'https://swapi.dev/api/people/1/';
    const expectedId = '1';
    const id = getIdFromUrl(url);

    expect(id).toBe(expectedId);
});

test('objectToQuery should return query', async () => {
    const obj = { name: 'hello' };
    const expectedQuery = '?name=hello';
    const query = objectToQuery(obj);

    expect(query).toBe(expectedQuery);
});
