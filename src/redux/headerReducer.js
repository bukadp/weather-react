const CHANGE_CITY_NAME = "CHANGE_CITY_NAME"
const ADD_LOCATION = "ADD_LOCATION"

const initialState = {
    mainCityName: "Dnipro",
    addedLocations: [
        "Dnipro",
        "Riga",
    ],
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CITY_NAME:
            return {
                ...state,
                mainCityName: action.payload,
            }
        case ADD_LOCATION:
            return {
                ...state,
                addedLocations: [...state.addedLocations, action.payload],
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

export default headerReducer;
