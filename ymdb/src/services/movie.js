const API_BASE_URL = `http://localhost:8081/api/`;
const SEARCH_URL = `${API_BASE_URL}search?s={s}`;
const DETAILS_URL = `${API_BASE_URL}details?id={id}`;
const RATINGS_URL = `${API_BASE_URL}ratings?id={id}`;

export async function search(s) {
    if (!s) {
        throw new Error('search term not supplied');
    }
    const url = SEARCH_URL.replace('{s}', s);
    return await (await fetch(url)).json();
}

export async function getDetails(id) {
    if (!id) {
        throw new Error('id not supplied');
    }
    const url = DETAILS_URL.replace('{id}', id);
    return await (await fetch(url)).json();
}

export async function getRatings(id) {
    if (!id) {
        throw new Error('id not supplied');
    }
    const url = RATINGS_URL.replace('{id}', id);
    return await (await fetch(url)).json();
}

export async function postRating(id, rating) {
    if (!id) {
        throw new Error('id not supplied');
    }
    if (!rating) {
        throw new Error('rating not supplied');
    }
    const url = RATINGS_URL.replace('{id}', id) + `&rating=${rating}`;
    return await (await fetch(url, { method: 'POST' })).json();
}
