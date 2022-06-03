import React from "react";


function ContentDetails () {
    return (
        <div>
            <div id="details" className="tabcontent">
                <div className="tabcontent-details-city">Dnipro</div>
                <div className="tabcontent-details-info">
                    <ul>
                        <li className="tabcontent-details-temp">Temperature: <span>14</span>&#176;</li>
                        <li className="tabcontent-details-feels">Feels like: <span>14</span>&#176;</li>
                        <li className="tabcontent-details-weather">Weather: <span>Clouds</span></li>
                        <li className="tabcontent-details-sunrise">Sunrise: <span>03:21</span></li>
                        <li className="tabcontent-details-sunset">Sunset: <span>18:54</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContentDetails;
