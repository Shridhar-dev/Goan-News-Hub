import React from 'react';

function Cards(props){
    return(
           <>
             <div class="zoomer">  
                    <img src={props.img} class="card-img-top" />
             </div>    
             <div class="card-body">
                    <div class="card-title">
                            <div class="h4">{props.title}</div>
                            <small>{props.bytitle}</small>
                    </div>
                    <div class="card-text">
                        {props.text}
                    </div>
                    <a href={props.link}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                        </svg>
                         </a>
                </div>    
           </>
        )
    }
export default Cards;