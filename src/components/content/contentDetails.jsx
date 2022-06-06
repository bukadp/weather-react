import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {timeTransform} from "../../utils/converters";
import {getWeather} from "../../redux/headerReducer";


function ContentDetails(props) {

    return (
        <div>
            <div id="details" className="tabcontent">
                <div className="tabcontent-details-city">{props.mainCityName}</div>
                <div className="tabcontent-details-info">
                    <ul>
                        <li className="tabcontent-details-temp">Temperature: <span>{Math.round(+(props.weather.main.temp) - 273)}</span>&#176;
                        </li>
                        <li className="tabcontent-details-feels">Feels
                            like: <span>{Math.round(+(props.weather.main.feels_like) - 273)}</span>&#176;</li>
                        <li className="tabcontent-details-weather">Weather: <span>{props.weather.weather[0].description[0].toUpperCase() + props.weather.weather[0].description.slice(1)}</span>
                        </li>
                        <li className="tabcontent-details-sunrise">Sunrise: <span>{timeTransform(props.weather.sys.sunrise)}</span>
                        </li>
                        <li className="tabcontent-details-sunset">Sunset: <span>{timeTransform(props.weather.sys.sunset)}</span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    mainCityName: state.request.mainCityName,
    weather: state.request.weather,

});

export default compose(
    connect(mapStateToProps, getWeather)
)(ContentDetails)

