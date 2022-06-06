import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeMainCityName, deleteLocation, getWeather} from "../../redux/headerReducer";


function Sidebar() {
    const addedLocations = useSelector(state => state.request.addedLocations);
    const dispatch = useDispatch()

/*    const setMainCityName = (e) => {
        dispatch(changeMainCityName(e.currentTarget.value))
    }*/

    const setMainCityName = (e) => {
        dispatch(getWeather(e.currentTarget.value))
    }

    const deleteLocationFromList = (e) => {
        dispatch(deleteLocation(e.currentTarget.value))
    }

    return (
        <div>
            <div className="row__right-added">Added Locations:</div>
            <div className="row__right-locations">{
                addedLocations.map(city => {
                    return (
                        <li
                            key={city}
                            className={"row__right-citys"}>
                            <button className="row__right-city"
                                    value={city}
                                    onClick={(e) => setMainCityName(e)}>{city}</button>
                            <button className="row__right-close"
                                    value={city}
                                    onClick={(e) => deleteLocationFromList(e)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-x-square" viewBox="0 0 16 16">
                                    <path
                                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                    <path
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </li>
                    )
                })
            }

            </div>
        </div>
    )
}

export default Sidebar;
