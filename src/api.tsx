const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
};
export async function Fetch() {
    try {
        const response = await fetch('https://logiclike.com/docs/courses.json', options);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}