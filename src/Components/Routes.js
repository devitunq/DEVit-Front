import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import Header from "../Components/Header";
import Gameboard from "../Components/Gameboard"
import Navbar from "../Components/Generics/Navbar"
import About from './About';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route component={Gameboard} path="/gameboard" />
                <Route component={About} path="/about" />
                <Route component={Header} path="/home" />
                <Route component={Header} exact path="/" />
            </BrowserRouter>

        );
    }
}

export default Routes;