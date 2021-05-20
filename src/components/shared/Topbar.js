import React from 'react';
import { Switch, Link, Route } from 'react-router-dom'

export default function Topbar() {
    return (
        <div>
            <Switch>
                {/* <Route path="/about">
                    <h1>this is rute</h1>
                </Route>
                <Route>
                    <h1>this is not rute</h1>
                </Route> */}



                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="#"><img id="logo" src="//cdn.yashodahospitals.com/wp-content/uploads/2016/08/yashoda-hospitals-logo.png" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/dashboard">Dash Board</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/locations"></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/locations" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Locations
        </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="#">Action</Link>
                                    <Link className="dropdown-item" to="#">Another action</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">News</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/specalities">Specalities</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <div className="searchBar">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                </nav >
            </Switch>
        </div>
    )
}
