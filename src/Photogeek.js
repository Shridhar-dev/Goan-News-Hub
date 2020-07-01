import React from 'react';
import fhs from './foto shastra.jpg';
import fhsi from './foto shastra im.jpg';
import ry from './rohanyuri.jpg';
import ss from './ss.jpg';
import db from './druvb.jpg';
import sk from './sk.jpg';
import './Photogeek.css';

class Photogeek extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div class="container pt-5 pb-5">
                <div class="display-4">Photo<strong>Geeks</strong>📷</div>
                <div class="row pt-3 pb-3 align-items-center justify-content-center">
                    <div class="col-12 col-sm-12 col-md-6 col-xl-4 pt-4 pb-4 bord">
                        <a href="https://www.instagram.com/rohanyuri/?hl=en">
                            <img src={ry} class="roundimg"/><span class="px-3 h4 pt-2">Rohan Yuri</span>
                    
                        </a>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-4 pt-4 pb-4 bord">
                        <a href="https://www.instagram.com/foto_shastra/?hl=en">
                            <img src={fhs} class="roundimg"/><span class="px-3 h4 pt-2">Foto Shastra</span>
                        </a>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-4 pt-4 pb-4 bord">
                        <a href="https://www.instagram.com/sainand_salgaonkar_/">
                            <img src={ss} class="roundimg"/><span class="px-3 h4 pt-2">Sainand Salgaonkar</span>
                        </a>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-4 pt-4 pb-4 bord">
                        <a href="https://www.instagram.com/thedhruvbhende/?hl=en">
                            <img src={db} class="roundimg"/><span class="px-3 h4 pt-2">The Dhruv Bhende</span>
                        </a>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-xl-4 pt-4 pb-4 bord">
                        <a href="https://www.instagram.com/kuvelkar/?hl=en">
                            <img src={sk} class="roundimg"/><span class="px-3 h4 pt-2">Sharmad Kuvelkar</span>
                        </a>
                    </div>
                </div>
               </div>
        )
    }
}
export default Photogeek;