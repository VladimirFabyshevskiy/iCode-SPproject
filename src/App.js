import React from "react";
import './App.css';
import Footer from "./components/inc/Footer";
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/About us";
import Activities from "./components/pages/Activities";
import Contacts from "./components/pages/Contacts";
import Privacy from "./components/pages/Privacy Policy";
import Signin from "./components/pages/Sign in";
import Sitemap from "./components/pages/Site map";
import Terms from "./components/pages/Terms of use";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from "./components/pages/Not found";
import Archive from "./components/pages/Archive";

function App() {
  return (
    <Router>
        <div>
          <Navbar />
          <Switch> 

            <Route exact path="/">
            <Home />
            </Route>

            <Route path="/About us">
            <Aboutus />
            </Route>

            <Route path="/Activities">
            <Activities />
            </Route>

            <Route path="/Contacts">
            <Contacts />
            </Route>

            <Route path="/Privacy Policy">
            <Privacy />
            </Route>

            <Route path="/Sign in">
            <Signin />
            </Route>
            <Route path="/Site map">
            <Sitemap />
            </Route>

            <Route path="/Terms of use">
            <Terms />
            </Route>

            <Route path="/Archive">
            <Archive />
            </Route>

            <Route path="/Footer">
           
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
