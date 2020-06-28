import React from 'react';
import icon from './icon.png';
import './Know.css';

class Know extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div class="container pt-5" id="knowus">
                <div class="display-4 pb-3">Who are we 🤔</div>
                <div class="container h2 textr pb-3">
                    We are people providing you with the information about Goa and keeping you updated.Apart from the traditional news channel we don't provide the same info but mostly about people and events around Goa.
                </div>
            </div>
        )
    }
}
export default Know;