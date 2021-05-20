import React from 'react'
import { Component } from 'react';
import "./style.css";

import Topbar from './shared/Topbar';
//import Testing from './Testing';
import {Switch, Route, Link} from 'react-router-dom'
import About from './pages/About';
import Locations from './pages/Locations';
import News from './pages/News';
import Specalities from './pages/Specalities';
import { Dashboard } from './pages/Dashboard';


export class Shop extends Component {
    render(){
    return (
        <div>
            <Topbar></Topbar>
         <Switch>
             <Route path="/about">
                <About/>
             </Route>
             <Route path="/Locations">
                <Locations/>
             </Route>
             <Route path="/Specalities">
                <Specalities/>
             </Route>
             <Route path="/News">
                <News/>
             </Route>
             <Route path="/Dashboard">
                <Dashboard/>
             </Route>
         </Switch>
        </div>
    )
    }


}

export default Shop