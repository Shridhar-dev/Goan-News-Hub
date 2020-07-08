import React from 'react';
import'./Community.css';

class Community extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    render(){
        return(
            <div class="container pt-5 pb-5">
                <div class="display-4">Join the Community</div>
                <div class="row align-items-center justify-content-center pt-5">
                    <div class="col-12 col-xl-6 col-md-6 pt-3" >
                        <a href="https://chat.whatsapp.com/EedbaZc7jQsDQSz3gAomp5"><div class="h2">Goa Programmers Forum🖥️</div></a>
                    </div>
                    <div class="col-12 col-xl-6 col-md-6 pt-3">
                    <a href="https://chat.whatsapp.com/Do9CDsgJqwdLI1Z2UZrV08" ><div class="h2">Goa Arduino Forum⌨️</div> </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Community;