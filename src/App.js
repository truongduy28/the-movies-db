import React from "react";
import Banner from "./components/Banner/Banner";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieContextProvider from "./context/MovieContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./components/Movie-details/Details";

const App = () => {
  return (
    <>
      <Router>
        <div className="dark-theme">
          <MovieContextProvider>
            <Header />
            {/* ROUTER NAVIGATION FRONTEND */}
            <Switch>
              <Route exact path="/">
                <Banner />
                <Content />
              </Route>
              <Route path="/movie/:id">
                <Details />
                <Content />
              </Route>
              <Route></Route>
            </Switch>
          </MovieContextProvider>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
