import React from 'react';
import './Explore.css';

class Explore extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div class="container-fluid graddiv mb-5">
                <div class="row align-items-center">
                    <div class="col-12 col-xl-6 col-md-6 col-sm-12">
                        <div class="pt-2 pb-0 pb-xl-5 pb-md-5 pb-sm-0 display-2">Explore <span class="fad rounded px-3 py-2"><strong>Within</strong></span></div>
                        <div class="pt-2 grad-des"><h2>Supporting<strong> Amazing </strong>creators all around Goa</h2></div>

                    </div>
                    <div class="col-12 col-xl-6 col-md-6 col-sm-12">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner align-items-center justify-content-center">
                                <div class="carousel-item active">
                                    <i class="fab fa-youtube"></i>
                                </div>
                                <div class="carousel-item">
                                    <i class="fab fa-facebook"></i>
                                </div>
                                <div class="carousel-item">
                                    <i class="fab fa-twitter-square"></i>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon px-5" aria-hidden="true"></span>
                                
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                
                            </a>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Explore;