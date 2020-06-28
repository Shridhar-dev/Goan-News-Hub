import React from 'react';
import icon from './icon.png';
import './Footer.css';

class Footer extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    render(){
        return(
            <div class="container-fluid footbody">
                <div class="row align items-center justify-content-center">
                <h4 class="pb-0 pt-5 g-0 col-12">Want yourself to be featured on our site</h4>
                    <h4 class="pt-5 g-0 col-12">Shoot us a mail</h4>
                    <h4 class="pt-5 pb-1 g-0 col-12">shridharkamat10@gmail.com</h4>
                    <h5 class="pt-5 pb-5 g-0 col-12">© Copyright Shridhar Kamat. All Rights Reserved</h5>
                </div>
            </div>
        )
    }
}
export default Footer;