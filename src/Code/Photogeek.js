import React from 'react';
import fhs from '../Images/foto shastra.jpg';
import ry from '../Images/rohanyuri.jpg';
import ss from '../Images/ss.jpg';
import db from '../Images/druvb.jpg';
import sk from '../Images/sk.jpg';
import pg from '../Images/PHOTOGEEKS (1).png';
import './Photogeek.css';
import './Navbar.css';
import {Link} from 'react-router-dom';
import Roundtext from './Round-text.js';

class Photogeek extends React.Component{
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
                    <img src={pg} class="img-fluid hI"></img>
                </div>
                <div class="container pt-5 pb-5">
                <div class="display-4">Photo<strong>Geeks</strong>📷</div>
                <div class="row pt-3 pb-3 align-items-center justify-content-center">
                <Roundtext link="https://www.instagram.com/rohanyuri/?hl=en" img={ry} name="Rohan Yuri" />
                <Roundtext link="https://www.instagram.com/foto_shastra/?hl=en" img={fhs} name="Foto Shastra" />
                <Roundtext link="https://www.instagram.com/sainand_salgaonkar_/" img={ss} name="Sainand Salgaonkar" />
                <Roundtext link="https://www.instagram.com/thedhruvbhende/?hl=en" img={db} name="The Dhruv Bhende" />
                <Roundtext link="https://www.instagram.com/kuvelkar/?hl=en" img={sk} name="Sharmad Kuvelkar" />
                </div>
               </div>
               </>
        )
    }
}
export default Photogeek;
