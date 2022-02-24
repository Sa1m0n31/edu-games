export default function getHotels(currentPage) {
    const axios = require('axios');
    return axios.get('http://localhost:8090/api/hotels', {
        params: {
            page: currentPage
        }
    })
        .then(function (response) {
            if (response.statusText === 'OK' && response.status === 200) {
                return response.data;
            } else {
                throw new Error('Problem z pobieraniem danych!');
            }
        })
        .catch(function (error) {
            console.log(error)
        });
}
