import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../images/Logo.png';

function Footer(){
    return(
        <footer className="footer text-center bg-light border border-info-50">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <img src={Logo} className="rounded float-start" height="50" width="80" alt="Logo"/> 
                        <div className="d-flex justify-content-around">
                            <span className="Copyright pt-3"> Copyright © 2021 Sport Partners</span>
                            <Link to="/Privacy Policy" className="footer-link mt-2 pt-2">Privacy Policy</Link>
                            <Link to="/Terms of Use" className="footer-link mt-2 pt-2">Terms of Use</Link>
                            <Link to="/Site Map" className="footer-link mt-2 pt-2">Site Map</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );

} 
export default Footer;