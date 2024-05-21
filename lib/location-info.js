export const getLocationData = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
        );

        const data = await response.json();

        return data;
    } catch (e) {
        console.error(e.message);
    }

}

export const getLocationLatLongList = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/location/`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e)
    }

}


export const getLocationLatLong = async (locationList) => {
    try {
        const response = await fetch(`http://localhost:3000/api/location/${locationList}`);

        const data = await response.json();

        return data;

    } catch (e) {
        console.error(e.message);
    }
}