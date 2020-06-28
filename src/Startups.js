import React from 'react';
import ab from './abledesign.png';
import lo from './lokaso.jpg';
import en from './Earnestek.jpg';
import tap from './tap.jpg';
import db from './druvb.jpg';
import gac from './GAC.jpg';
import './Startups.css';

class Startups extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div class="container pt-5">
                <div class="pb-5">
                <div class="display-4"><strong>🌟Star</strong>tUps</div>
                <div class="row pt-3 pb-3 align-items-center justify-content-center">
                    <div class="col-12 col-sm-12 col-md-6 col-xl-4 pt-4 pb-4 bord">
                        <img src={lo} class="roundimg"/><span class="px-3 h4 pt-2">Lokaso</span>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-4 pt-4 pb-4 bord">
                            <img src={ab} class="roundimg"/><span class="px-3 h4 pt-2">Able Design</span>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-4 pt-4 pb-4 bord">
                            <img src={gac} class="roundimg"/><span class="px-3 h5 pt-2">Goa Adventure Club</span>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-4 pt-4 pb-4 bord">
                            <img src={tap} class="roundimg"/><span class="px-3 h4 pt-2">Think A Paint</span>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-4 pt-4 pb-4 bord">
                            <img src={en} class="roundimg"/><span class="px-3 h4 pt-2">Earnestek</span>
                    </div>
                </div>
                </div>
               </div>
        )
    }
}
export default Startups;