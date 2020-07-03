import React from 'react';
import fhs from './Images/foto shastra.jpg';
import vv from './Images/vv.jpg'
import gj from './Images/gajesh.jpg'
import kastaad_memes from './Images/kastaad_memes.jpg';
import './CreatorSpotlight.css';
import './Photogeek.css';
import './Explore.css';
import Roundtext from './Round-text.js';
import {Link} from 'react-router-dom';
class CreatorSpotlight extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <>
             <div class="container-fluid graddiv mb-5">
             <div class="display-4 pt-5 pb-4">Creator<strong> Spotlight</strong></div>
                <div class="row align-items-center justify-content-center">
                    <div class="col-12 col-xl-6 col-md-6 col-sm-12">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active pb-5">
                                <img src={kastaad_memes} class="roundimg mt-5 mb-3" alt="..."/>
                                <h2>Kastaad Memes</h2>
                                <small>Category:Memes</small>
                            </div>
                            <div class="carousel-item pb-5">
                            <img src={fhs} class="roundimg mt-5 mb-3" alt="..."/>
                                <h2>Foto Shastra</h2>
                                <small>Category:Photography</small>
                            </div>
                            <div class="carousel-item pb-5">
                            <img src={vv} class="roundimg mt-5 mb-3" alt="..."/>
                                <h2>Vaishnav Vharkhat</h2>
                                <small>Category:Podcasting</small>
                            </div>
                            <div class="carousel-item pb-5">
                            <img src={gj} class="roundimg mt-5 mb-3" alt="..."/>
                                <h2>Gajesh Naik</h2>
                                <small>Category:Blogging</small>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default CreatorSpotlight;