import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import RecommendedVideos from './RecommendedVideos.js';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchPage from "./SearchPage.js";

function App() {
  return (
    <div className="app">

      <Router>
        <Header/>
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar/>
              <SearchPage/>
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar/>
              <RecommendedVideos/>
            </div>
          </Route>
        </Switch>
      </Router>

      {/*<Header/>
      <div className="app_page">
        <Sidebar/>
        <RecommendedVideos/>
      </div>*/}
    </div>
  );
}

export default App;
