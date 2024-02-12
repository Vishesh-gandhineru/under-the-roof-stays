export async function getAllProperty() {
    const response = await fetch('http://localhost:7000/api/home/get-all');
    const data = await response.json();

    if (data.success) {
        return data.properties;
    } else {
        throw new Error('API request failed');
    }
}


