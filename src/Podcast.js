import React from 'react';
import mc from './mic.png';
import pepo from './pepo.png';
import thr from './thr.jpg';
import vv from './vv.jpg';
import kns from './tkns.jpg';
import'./Podcast.css';

class Bloggers extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    render(){
        return(
            <div class="container pt-5 pb-5">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-3 col-md-3 col-sm-12 col-12">
                        <img src={mc} height="600px" class="mic d-none d-xl-block d-md-block"/>
                    </div>
                    <div class="col-xl-9 col-md-9 col-sm-12 col-12 mt-4">
                        <div class="display-4">Podcasts🎙️</div>
                        <div class="row">
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
        )
    }
}
export default Bloggers;