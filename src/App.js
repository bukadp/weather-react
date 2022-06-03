import './App.css';
import Header from "./components/header/header";
import ContentContainer from "./components/content/contentContainer";

import Sidebar from "./components/right-sidebar/sidebar";
import ContentTabs from "./components/content-tabs/contentTabs";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ContentNow from "./components/content/contentNow";
import ContentDetails from "./components/content/contentDetails";
import ContentForecast from "./components/content/contentForecast";

function App() {
    return (
        <Router>
            <div className="wrapper">
                <div className="search">
                    <Header/>
                </div>
                <div className="row">
                    <div className="row__left">
                        <div className="row__left-tabcontent">
                            <Routes>
                                <Route path="/" element={<ContentNow/>}/>
                                <Route path="/details" element={<ContentDetails/>}/>
                                <Route path="/forecast" element={<ContentForecast/>}/>
                            </Routes>
                        </div>
                        <div className="row__left-tabs">
                            <ContentTabs/>
                        </div>
                    </div>
                    <div className="row__right">
                        <Sidebar/>
                    </div>
                </div>

            </div>
        </Router>
    );

}

export default App;
