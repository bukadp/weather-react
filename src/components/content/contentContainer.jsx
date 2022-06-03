import React from "react";
import ContentNow from "./contentNow";
import ContentDetails from "./contentDetails";
import ContentForecast from "./contentForecast";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function ContentContainer() {
    return (
/*        <Router>
        <div>
            <Routes>
                <Route path="/" element={<ContentNow/>}/>
                <Route path="/details" element={<ContentDetails/>}/>
                <Route path="/forecast" element={<ContentForecast/>}/>
                </Routes>
        </div>
            </Router>*/

        <ContentNow/>

    )
}

export default ContentContainer;
