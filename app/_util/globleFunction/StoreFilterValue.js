

export const GetLocationFromLocal = () => {
    const location = localStorage.getItem('location');
    return location;
}