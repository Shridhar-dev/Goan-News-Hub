import React from 'react';
import mc from '../Images/mic.png';
import pepo from '../Images/pepo.png';
import thr from '../Images/thr.jpg';
import vv from '../Images/vv.jpg';
import kns from '../Images/tkns.jpg';
import pd from '../Images/PODCASTS (1).png';
import {Link} from 'react-router-dom';
import './Navbar.css';
import'./Podcast.css';

class Bloggers extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    render(){
        return(
            <>
            <div class="container-fluid px-0">
                <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Goan News Hub📰</a>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                        <Link class="nav-link" to="/">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                                <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </Link>
                        </li>
                    </ul>
                    </div>
                </nav>
                    <img src={pd} class="img-fluid hI"></img>
                </div>
            <div class="container pt-5 pb-5">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-3 col-md-3 col-sm-12 col-12">
                        <img src={mc} height="600px" class="mic d-none d-xl-block d-md-block"/>
                    </div>
                    <div class="col-xl-9 col-md-9 col-sm-12 col-12 mt-4">
                        <div class="display-4">Podcasts🎙️</div>
                        <div class="row">
                            <div class="col mx-2 pobox">
                                <div class="col-12 pt-3 pb-3">
                                <a href="https://linktr.ee/peakpotential">
                                    <img src={pepo} class="roundimg"/><span class="px-3 h4 pt-2">Peak Potential</span>
                            
                                </a>
                            </div>
                            <div class="col-12 pt-3 pb-3">
                                <a href="https://open.spotify.com/show/5NUCt7kFlBhtenJmPPMozK?si=qm-qOj-wSIGWkX3msxlRAw">
                                    <img src={thr} class="roundimg"/><span class="px-3 h4 pt-2">The Hustle Radio</span>
                                </a>
                            </div>
                            <div class="col-12 pt-3 pb-3">
                                <a href="https://open.spotify.com/show/5i2W6Wl2YJtGVIQpzpxEJb">
                                    <img src={kns} class="roundimg"/><span class="px-3 h4 pt-2">Kabir Naik Show</span>
                                </a>
                            </div>
                            <div class="col-12 pt-3 pb-3">
                                <a href="https://linktr.ee/thevaishnavshow">
                                    <img src={vv} class="roundimg"/><span class="px-3 h4 pt-2">The Vaishnav Show</span>
                                </a>
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
export default Bloggers;