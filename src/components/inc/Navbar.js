import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../images/Logo.png';

function Navbar(){
    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light border border-info-50">
         <div className="container-fluid">
            <a class="navbar-brand" href="/">
            <img src={Logo} class="rounded float-start" height="50" width="80" alt="Logo"/></a>
            <button className="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                        <Link to="/" className="nav-link active mt-1">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About us" className="nav-link active mt-1">About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contacts" className="nav-link active mt-1">Contacts</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Activities" className="nav-link active mt-1">Activities</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Sign in" className="nav-link active mt-1">Sign in</Link>
                    </li> 
                </ul>
            </div>
        </div>
      </nav>
    );
}

export default Navbar;
