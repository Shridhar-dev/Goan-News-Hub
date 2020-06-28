import React from 'react';
import imghead from './hed.jpg'
import './Navbar.css';
class Navbar extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Goan News Hub📰</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="https://twitter.com/shridhar_kdev">Twitter</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="https://www.youtube.com/channel/UCv2hTdClW8560n89OZ6cazA?view_as=subscriber">YouTube</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="https://github.com/Shridhar-dev">GitHub</a>
                        </li>
                    </ul>

                    </div>
                </div>
                
                </nav>
            </div>
        )
    }
}
export default Navbar;