import React from "react";
import {NavLink} from "react-router-dom";


function ContentTabs() {
    return (
        <div>
            <div className="row__left-tabs">
{/*
                <button className="active">Now</button>
                <button>Details</button>
                <button>Forecast</button>
*/}

                <NavLink to="/">
                    Now
                </NavLink>
                <NavLink to="/details">
                    Details
                </NavLink>
                <NavLink to="/forecast">
                    Forecast
                </NavLink>
            </div>
        </div>
    )
}

export default ContentTabs;
