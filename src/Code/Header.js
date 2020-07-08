import React from 'react';
import halfcut from '../Images/halfcutfinal-clearer.png';
import icon from '../Images/icon.png';
import './Header.css';

class Header extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div>
            <div class="headImg">
                <div class="row align-items-center justify-content-center pt-3 pt-xl-0">
                    <div class="col-12 col-sm-12 col-md-12 col-xl-6 pt-5 pt-xl-0">
                        <h1 class="display-4 display-md-4">Providing <strong>Stuff</strong></h1><h1 class="display-4"> That Nobody Provides</h1>
                        <p class="intext">Know more about the <u>state</u> you are living in</p>
                        <div class="headflex">
                        <a href="#knowus"><div class="fas fa-chevron-circle-down"></div></a><div class="headflextext">Know More</div>  
                        </div>
                        <div class="mx-xl-3">
                        <hr class="mx-xl-5 "/>
                        </div>
                    </div>
                    <div class="col pt-0 pt-xl-5"> 
                        <div class="pb-xl-5">
                        <img src={icon}  width="400" class="pt-5 pt-xl-5 pb-xl-5 mt-0"/>
                        </div>
                    </div>
                    
                </div>
                </div>
                <div>
                <img src={halfcut}  width="1366" class="img-fluid" style={{marginTop:0,paddingTop:0}}/>     
            </div>
            </div>
        )
    }
}
export default Header;