async function fetchData() {
    const URL = 'https://api.npoint.io/e8b8755cac0ee1692959';
    try {
        const response = await fetch(URL);
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

export default fetchData;

