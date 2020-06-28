import React from 'react';
import icon from './icon.png';
import './DevNotes.css';

class DevNotes extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    render(){
        return(
            <div class="container-fluid">
            <p>
            <a class="btn denbutton" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Dev Notes
            </a>
            </p>
            <div class="collapse" id="collapseExample">
            <div class="card card-body">
                <ul>
                    <li>
                        Bootstrap 5 framework has been used along with React.js,CSS and JavaScript
                    </li>
                    <li>
                        Icons used are from Bootstrap Icon Library and Font Awesome website
                    </li>
                    <li>
                        Type:Responsive
                    </li>
                    <li>
                        Source code available on GitHub(Shridhar-dev)
                    </li>
                    
                </ul>
            </div>
            </div>
            </div>
        )
    }
}
export default DevNotes;