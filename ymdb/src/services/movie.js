const API_BASE_URL = `http://localhost:8081/api/`;
const SEARCH_URL = `${API_BASE_URL}search?s={s}`;

export async function search(s) {
    const url = SEARCH_URL.replace('{s}', s);
    return await (await fetch(url)).json();
}