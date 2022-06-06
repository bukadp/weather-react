import React from "react";
import {useSelector} from "react-redux";


function ContentForecast (props) {
    const mainCityName = useSelector(state => state.request.mainCityName);
    const weatherForecast = useSelector(state => state.request.weatherForecast);

    return (
        <div>
            <div id="forecast" className="tabcontent">
                <div className="tabcontent-forecast-city">{mainCityName}</div>

                <div className="tabcontent-forecast-info-box" id="forecastWeather">
                    <div className="tabcontent-forecast-info-box-day-time">
                        <div className="tabcontent-forecast-info-box-day">2 Jun</div>
                        <div className="tabcontent-forecast-info-box-time">12:00</div>
                    </div>
                    <div className="tabcontent-forecast-info-box-temp-ico">
                        <div className="tabcontent-forecast-info-box-temp">
                            <div
                                className="tabcontent-forecast-info-box-temperature">Temperature: <span>28</span>&#176;
                            </div>
                            <div className="tabcontent-forecast-info-box-feels">Feels
                                like: <span>28</span>&#176;</div>
                        </div>
                        <div className="tabcontent-forecast-info-box-ico">
                            <div
                                className="tabcontent-forecast-info-box-ico-name">Clouds</div>
                            <div className="tabcontent-forecast-info-box-ico-icon box-ico" id="firstBoxIco"><img
                                src="https://openweathermap.org/img/wn/02d.png" alt="weather"/></div>
                        </div>
                    </div>
                </div>




                {/*<div className="tabcontent-forecast-info">
                    <div id="forecastWeather"></div>
                </div>*/}

            </div>
        </div>
    )
}

export default ContentForecast;
