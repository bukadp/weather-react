import axios from "axios";
/*
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const serverUrlForecast = 'http://api.openweathermap.org/data/2.5/forecast';*/

const serverIcoUrl = 'https://openweathermap.org/img/wn/';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/',
})

export const weatherAPI = {
    getWeather(mainCityName = "Dnipro") {
        return instance.get(`weather?q=${mainCityName}&appid=${apiKey}`)
            .then(response => {
                return response.data;
            });
    },

    getForecast(mainCityName = "Dnipro") {
        return instance.get(`forecast?q=${mainCityName}&appid=${apiKey}`)
            .then(response => {
                return response.data;
            });
    },
}
