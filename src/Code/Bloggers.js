import React from 'react';
import gj from '../Images/gajesh.jpg';
import thz from '../Images/thz.jpg';
import dc from '../Images/dev cluster.png';
import tpn from '../Images/tpn.jpg';
import shk from '../Images/shk.jpeg';
import blog from '../Images/BLOGGERS (1).png';
import {Link} from 'react-router-dom'
import './Photogeek.css';
import Roundtext from './Round-text';
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
                    <img src={blog} class="img-fluid hI"></img>
                </div>
            <div class="container-fluid mt-5 mb-5">
            
                    <div class="pt-2 pb-0 pb-xl-5 pb-md-5 pb-sm-0 display-2">Bloggers</div>
                    <div class="row pt-3 pb-3 align-items-center justify-content-center">
                    <Roundtext img={gj} link="https://hackernoon.com/u/gajesh2007" />
                    <Roundtext img={thz} link="https://hackernoon.com/u/TheHardwaron" />
                    <Roundtext img={dc} link="https://medium.com/devclustergoa" />
                    <Roundtext img={shk} link="https://medium.com/@shreykeny" />
                    <Roundtext img={tpn} link="https://medium.com/@sertanmay" />
                   </div>
                </div>
                
                
                
           </>
        )
    }
}
export default Bloggers;