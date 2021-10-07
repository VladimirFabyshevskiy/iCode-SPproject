import React from "react";
import Badminton from '../images/Badminton test.jpg';
import Wrestling from '../images/wrestling test.jpg';
import Motorcycle from '../images/Motorcycle test.jpg';

function Carousel(){
    return(
        <section id="vld_carousel">
        <div className="container-fluid m-0 p-0">
          <div className="row">
            <div className="col-12">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Badminton} className="d-block w-100" alt="tennis_picture"/>
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Improve your physical and mental health</h3>
                      <p>Build strong muscles, control weight, reduce stress</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={Wrestling} className="d-block w-100" alt="basketball_picture"/>
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Improve your sport technique</h3>
                      <p>Learn from others</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={Motorcycle} className="d-block w-100" alt="motorcycle_picture"/>
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Get new connections</h3>
                      <p>Enchance your social skills and broad your networking</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Carousel