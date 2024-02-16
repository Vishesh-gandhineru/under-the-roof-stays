

export async function getAllProperty() {

     const url = process.env.GET_ALL_PROPERTY_API
    const response = await fetch(url);
    const data = await response.json();

    if (data.success) {
        return data.properties;
    } else {
        throw new Error('API request failed');
    }
}


