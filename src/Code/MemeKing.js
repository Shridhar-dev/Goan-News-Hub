import React from 'react';
import mk from '../Images/MEMEKINGS.png';
import kastaad_memes from '../Images/kastaad_memes.jpg';
import thegoanpao from '../Images/thegoanpao.jpg';
import './Photogeek.css';
import Roundtext from './Round-text.js';
import {Link} from 'react-router-dom';
class MemeKing extends React.Component{
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
                    <img src={mk} class="img-fluid hI"></img>
                </div>
            <div class="container pt-5 pb-5">
                <div class="display-4">Meme<strong>Kings</strong>👑</div>
                <div class="row pt-3 pb-3 align-items-center justify-content-center">
                   <Roundtext link="https://www.instagram.com/kastaad_memes/" img={kastaad_memes} name="Kastaad Memes" />
                   <Roundtext link="https://www.instagram.com/thegoanpao/" img={thegoanpao} name="The Goan Pao" />
                </div>
               </div>
            </>
        )
    }
}
export default MemeKing;
