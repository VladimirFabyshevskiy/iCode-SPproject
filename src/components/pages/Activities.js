import React from "react";
import Invitations from "../inc/Invitations";
import {Link} from 'react-router-dom';

function Activities(){
    return (
        <div>
           
             <Invitations />
           
            <section className="Contacts text-center pt-5 bg-light border border-info-50">
                <div className="container-fluid">
                    <div className="row">
                        <div className="bg-light col-12 justify-content-center d-flex">
                            <div className="my-5 py-5 text-center">
                               <h5> <Link to="/Archive">List of created invitations</Link> </h5>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>  
        </div>
    );
}

export default Activities;
