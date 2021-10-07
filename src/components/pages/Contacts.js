import React from "react";

function Contacts(){
    return (
        <section class="Contacts text-center mt-2 pt-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 bg-light"> 
                        <h1 class="text center my-2 pt-4 pb-4">Our contacts:</h1>
                        <div class="d-flex bg-light align-items-center">
                            <ul class="list-group ms-5 ps-5 col-3">
                                <li class="list-group-item">Location: Calgary</li>
                                <li class="list-group-item">Phone: 587.......</li>
                                <li class="list-group-item">Email: office@sp.com</li>
                            </ul>
                            <div class="d-none d-md-block col-10">
                                <div id="map-container-google-1" class="z-depth-1-half map-container">
                                </div>
                                <div> 
                                <iframe title="Google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321199.8205781634!2d-114.36802078448106!3d51.02772022997517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1632274533938!5m2!1sen!2sca" width="600" height="450" style={{border:0}}allowfullscreen loading="lazy/"> </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
