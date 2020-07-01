import React from 'react';
import kastaad_memes from './kastaad_memes.jpg';
import thegoanpao from './thegoanpao.jpg';
import './Photogeek.css';
import Roundtext from './Round-text.js';
class MemeKing extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div class="container pt-5 pb-5">
                <div class="display-4">Meme<strong>Kings</strong>👑</div>
                <div class="row pt-3 pb-3 align-items-center justify-content-center">
                   <Roundtext link="https://www.instagram.com/kastaad_memes/" img={kastaad_memes} name="Kastaad Memes" />
                   <Roundtext link="https://www.instagram.com/thegoanpao/" img={thegoanpao} name="The Goan Pao" />
        

                </div>
               </div>
        )
    }
}
export default MemeKing;
