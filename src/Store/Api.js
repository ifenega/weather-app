import axios from "axios";


const getWeather = (lat,lon) => {
    return axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=84c3fdc444da422c83970838259382c8`, {
        headers: {
            "Content-Type": "application/json",
        }
    });
}

const getWeatherCity = (city) => {
    return axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&key=84c3fdc444da422c83970838259382c8`, {
        headers: {
            "Content-Type": "application/json",
        }
    });
}

const apiService = {
    getWeather,
    getWeatherCity

}

export default apiService;