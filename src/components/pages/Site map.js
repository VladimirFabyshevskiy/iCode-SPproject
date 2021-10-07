import React from "react";
import {Link} from 'react-router-dom';

function Sitemap(){
    return (
        <section className="mt-5 py-5 bg-light text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5">
                        <div>
                            <h2 className="bg-light">Site map</h2>
                        </div>
                        <div className="mt-5 bg-light"> 
                            <div className="pb-2"><Link to="/">Home</Link></div>
                            <div className="pb-2"><Link to="/About us">About us</Link></div>
                            <div className="pb-2"><Link to="/Contacts">Contacts</Link></div>
                            <div className="pb-2"><Link to="/Activities">Activities</Link></div>
                            <div className="pb-2"><Link to="/Sign in">Sign in</Link></div>
                            <div className="pb-2"><Link to="/Privacy Policy">Privacy Policy</Link></div>
                            <div className="mb-5 pb-5"><Link to="/Terms of use">Terms of use</Link></div>
                        </div>
                           
                    </div>  
                </div>     
            </div>
        </section> 
    );
}

export default Sitemap;
