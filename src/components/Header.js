import React from 'react'
import {NavLink} from 'react-router-dom';
import './Header.css'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className="container-fluid justify-content-center justify-content-md-start">
                <div className=" navbar-expand">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item pe-3">
                            <NavLink className="nav-link" exact to="/">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/userlist">Userlist</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
