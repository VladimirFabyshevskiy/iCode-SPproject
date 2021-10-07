import React from "react";
import Carousel from '../inc/Carousel';
import Purpose from '../images/Purpose.jpg';

function Aboutus(){
    return (
        <div>
            <section> 
                <div>
                <Carousel />
                </div>
            </section>
           
            <section className="Purpose pb-3 bg-light border border-info-50">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex bg-light align-items-center">
                            <div className="d-none d-md-block">
                                <img className="img-fluid pt-3 px-5" src={Purpose} alt="Purpose"/>
                            </div>
                            <div className="col-lg-8">
                                <h3>The purpose of the application is providing support to find a sport partner in different kinds of sports, depending on the user location and preferences.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Audience bg-light border border-info-50 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5 pb-5">
                            <p className="ps-5">
                             <h3 className="text-center pb-5">This application is for individuals who:</h3>
                            </p>
                            <div className="border border-info-50">
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item bg-light">
                                                <h2 className="accordion-header" id="flush-headingOne">
                                                    <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    New
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseOne" className="accordion-collapse collapse"      aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body ms-5 ps-5"> want to try themselves in a new sport and require a sport partner;
                                                    </div>
                                                </div>
                                        </div>

                                        <div className="accordion-item bg-light">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                Experienced
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body ms-5 ps-5">want to enchance their sport skills by training with the same skiled or more experienced partner;</div>
                                            </div>
                                        </div>

                                        <div className="accordion-item bg-light">
                                            <h2 className="accordion-header" id="flush-headingThree">
                                                <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Need advice
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body ms-5 ps-5">want to receive a proffessional advice/recommendations from more experienced partners during their play.</div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Aboutus;
