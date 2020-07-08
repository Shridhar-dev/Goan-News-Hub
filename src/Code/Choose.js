import React from 'react';
import {Link} from 'react-router-dom';
import './Choose.css';
class Choose extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div class="container pt-5 pb-5">
                <div class="display-4">Choose your category</div>
                <div class="pt-5 pb-5">
                    <div class="row justify-content-center align-items-center">
               <Link to="/photography">
                   <div class="col-12 col-xl-4">
                    <button class="choosebutton px-3 mx-5 mt-2 mb-2"><div class="mt-2 mb-2 chooseop">📷</div></button>
                    </div>
                </Link>
               <Link to="/podcast">
                    <div class="col-12 col-xl-4">
                   <button class="choosebutton px-3 mx-5 mt-2 mb-2"><div class="mt-2 mb-2 chooseop">🎙️</div></button>
                   </div>
                   </Link>
               <Link to="/memes">
                <div class="col-12  col-xl-4">
                   <button class="choosebutton px-3 mx-5 mt-2 mb-2"><div class="mt-2 mb-2 chooseop">🤣</div></button>
                </div>
                </Link>
               <Link to="/bloggers">
                <div class="col-12  col-xl-4">   
                   <button class="choosebutton px-3 mx-5 mt-2 mb-2"><div class="mt-2 mb-2 chooseop">✒️</div></button>
                </div>
               </Link>
               <Link to="/comingsoon">
                   <div class="col-12 col-xl-4">
                <button class="choosebutton px-5 mx-5 mt-2 mb-2"><div class="mt-2 mb-2 chooseop">🍳</div></button>
                </div>
                </Link>
                <Link to="/startups">
                    <div class="col-12 col-xl-4">
                <button class="choosebutton px-5 mx-5 mt-2 mb-2 chooseop"><div class="mt-2 mb-2">🏭</div></button>
                </div>
                </Link>
                <Link to='/comingsoon'>
                    <div class="col-12 col-xl-4">
                <button class="choosebutton px-5 mx-5 mt-2 mb-2 chooseop"><div class="mt-2 mb-2">⚽</div></button>
                </div>
                </Link>
                </div>
            </div>
            </div>
            
        )
    }
}
export default Choose;