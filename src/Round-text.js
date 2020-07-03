import React from 'react';

import './Photogeek.css';

function Roundtext(props){
        return(
            <div class="col-12 col-sm-12 col-md-6 col-xl-4 pt-4 pb-4 bord">
                        <a href={props.link}>
                            <img src={props.img} class="roundimg"/><span class="px-3 h5 pt-2">{props.name}</span>
                        </a>
            </div>
        )
    }

export default Roundtext;
