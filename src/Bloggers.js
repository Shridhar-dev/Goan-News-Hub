import React from 'react';
import gj from './gajesh.jpg';
import thz from './thz.jpg';
import dc from './dev cluster.png';
import tpn from './tpn.jpg';
import shk from './shk.jpeg';
import './Photogeek.css';
import'./Explore.css';

class Bloggers extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    render(){
        return(
            <div class="container-fluid graddiv mt-5 mb-5">
            
                    <div class="pt-2 pb-0 pb-xl-5 pb-md-5 pb-sm-0 display-2">Bloggers</div>
                    <div class="row pt-3 pb-3 align-items-center justify-content-center">
                   
                    <div class="col-6 col-sm-6 col-md-4 col-xl-4 pt-4 pb-4 bord">
                    <a href="https://hackernoon.com/u/gajesh2007">
                            <img src={gj} class="roundimg"/>
                    
                        </a>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-xl-4 pt-4 pb-4 bord">
                        <a href="https://hackernoon.com/u/TheHardwaron">
                            <img src={thz} class="roundimg"/>
                        </a>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-xl-4 pt-4 pb-4 bord">
                        <a href="https://www.instagram.com/sainand_salgaonkar_/">
                            <img src={dc} class="roundimg"/>
                        </a>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-xl-4 pt-4 pb-4 bord">
                        <a href="https://medium.com/@shreykeny">
                            <img src={shk} class="roundimg"/>
                        </a>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-xl-4 pt-4 pb-4 bord">
                        <a href="https://medium.com/@sertanmay">
                            <img src={tpn} class="roundimg"/>
                        </a>
                    </div>
                </div>
                    </div>
                
                
                
           
        )
    }
}
export default Bloggers;