import React from 'react';
import ab from '../Images/abledesign.png';
import lo from '../Images/lokaso.jpg';
import en from '../Images/Earnestek.jpg';
import tap from '../Images/tap.jpg';
import gac from '../Images/GAC.jpg';
import {Link} from 'react-router-dom';
import startup from '../Images/STARTUPS (1).png';
import Roundtext from './Round-text';
import './Startups.css';

class Startups extends React.Component{
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
                    <img src={startup} class="img-fluid hI"></img>
                </div>
            <div class="container pt-5">
                <div class="pb-5">
                <div class="display-4"><strong>🌟Star</strong>tUps</div>
                <div class="row pt-3 pb-3 align-items-center justify-content-center">
                    <Roundtext img={lo} name="Lokaso" />
                    <Roundtext img={ab} name="Able design" />
                    <Roundtext img={gac} name="Goa Adventure Club" />
                    <Roundtext img={tap} name="Think A Paint" />
                    <Roundtext img={en} name="Earnestek" />
                </div>
                </div>
               </div>
               </>
        )
    }
}
export default Startups;