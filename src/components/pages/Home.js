import React from "react";
import {Link} from 'react-router-dom';
import running from "../images/running.jpg";
import Yoga from "../images/Yoga -1.jpg";

function Home(){
    return (
        <div className="bg-light">
            <section className="headline text-center mt-5 pt-2">
                <div classNameName="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="border border-info-50">
                                <div className="d-flex bg-light align-items-center">
                                    <div>
                                    <h1 className="col-12 px-3"> Find your ideal sport partner </h1>
                                    </div>
                                    <img className="img-fluid col-10 border-start border-info-50" src={running} alt="headline"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cards mt-5, mx-5 p-5 ">
                <div className="row">
                        <div className="col-md-12, col-lg-12">
                            <div className="card">
                                <div className="card-body align-items-center">
                                    <img src={Yoga} className="card-img-top" alt="..."/>
                                    <h5 className="card-title pt-2">Create a sport event invitation</h5>
                                    <p className="card-text">Built your invitation based on your preferences.</p>
                                    <Link to="/Activities" className="btn btn-primary">Go to "Create an invitation" page</Link>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
