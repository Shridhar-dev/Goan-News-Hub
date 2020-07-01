import React from 'react';
import fhs from './foto shastra.jpg';
import ry from './rohanyuri.jpg';
import ss from './ss.jpg';
import db from './druvb.jpg';
import sk from './sk.jpg';
import './Photogeek.css';

function Roundtext(props){
        return(
            <div class="col-12 col-sm-12 col-md-6 col-xl-4 pt-4 pb-4 bord">
                        <a href={props.link}>
                            <img src={props.img} class="roundimg"/><span class="px-3 h4 pt-2">{props.name}</span>
                        </a>
            </div>
        )
    }

export default Roundtext;
