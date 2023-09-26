export default async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=1`);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}