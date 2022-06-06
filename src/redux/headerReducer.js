import {weatherAPI} from "../api/api";
import {initializedSucces} from "./appReducer";

const CHANGE_CITY_NAME = "CHANGE_CITY_NAME"
const ADD_LOCATION = "ADD_LOCATION"
const DELETE_LOCATION = "DELETE_LOCATION"
const SET_WEATHER = "SET_WEATHER"
const SET_WEATHER_FORECAST = "SET_WEATHER_FORECAST"

const initialState = {
    mainCityName: "Dnipro",
    addedLocations: [
        "Dnipro1",
        "Riga",
    ],
    weather: [],
    weatherForecast: [],
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CITY_NAME:
            return {
                ...state,
                mainCityName: action.payload[0].toUpperCase()+action.payload.slice(1),
            }
        case ADD_LOCATION:
            return {
                ...state,
                addedLocations: [...state.addedLocations, action.payload],
            }
        case DELETE_LOCATION:
            return {
                ...state,
                addedLocations: state.addedLocations.filter(city => city !== action.payload)
            }
        case SET_WEATHER:
            return {
                ...state,
                weather: action.payload,
            }
        case SET_WEATHER_FORECAST:
            return {
                ...state,
                weatherForecast: action.payload,
            }

        default:
            return state;
    }
}

export const changeMainCityName = (cityName) => ({
    type: CHANGE_CITY_NAME,
    payload: cityName,
})
export const addLocation = (cityName) => ({
    type: ADD_LOCATION,
    payload: cityName,
})
export const deleteLocation = (cityName) => ({
    type: DELETE_LOCATION,
    payload: cityName,
})
export const setWeather = (weather) => ({
    type:SET_WEATHER,
    payload: weather,
})
export const setWeatherForecast = (weatherForecast) => ({
    type:SET_WEATHER_FORECAST,
    payload: weatherForecast,
})

export const getWeather = (mainCityName) => {
    return (dispatch) => {
        dispatch(changeMainCityName(mainCityName));

        weatherAPI.getWeather(mainCityName).then(data => {
            dispatch(setWeather(data));
        });
        weatherAPI.getForecast(mainCityName).then(data => {
            dispatch(setWeatherForecast(data));
        });
        dispatch(initializedSucces())
    }
}


export default headerReducer;
