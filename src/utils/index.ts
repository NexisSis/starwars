export const getIdFromUrl = (str: string) => {
    const temp = str.split('/');

    return temp[temp.length - 2];
};

export const objectToQuery = (obj: object) => {
    let str = '?';

    for (const key in obj) {
        if (str !== "?") {
            str += "&";
        }

        if (obj[key]) {
            str += `${key}=${encodeURIComponent(obj[key])}`;
        }
    }

    return str;
};
