import React from 'react';
import head from './hed.jpg';
import './Latest.css';
import pao from "./pao.jpg";
import creators from "./creators.jpg";
import chatbot from "./chatbot.jpg";
import ocr from "./ocr.jpg";
import goaday from "./goaday.jpg";
import covidan from "./covidan.jpg";
import duckduckgo from "./duckduckgo.jpg";
class Latest extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div class="container">
                <h1 class="pt-5 pb-5">Latëst</h1>
                <div class="row">
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 pt-2 pb-2 ">
                            <div class="zoomer">
                                <img src={pao} class="card-img-top" />
                            </div>
                            <div class="card-body">
                                <div class="card-title">
                                    <div class="h4">Life of Pao</div>
                                    <small>By Kabir Naik</small>
                                </div>
                                <div class="card-text">
                                This video by Kabir Naik tells us about Goa's favourite delicacy the Pao
                                </div>
                                <a href="https://www.youtube.com/watch?v=rZcWl7ajSRQ">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                    </svg>
                                </a>
                            </div>
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 pt-2 pb-2">
                            <div class="zoomer">
                                <img src={goaday} class="card-img-top" />
                            </div>
                            <div class="card-body">
                                <div class="card-title">
                                    <div class="h4">A Day in a Village of Goa</div>
                                    <small>By The Local Bus</small>
                                </div>
                                <div class="card-text">
                                    Experience the feeling of living in a village of Goa
                                </div>
                                <a href="https://www.youtube.com/watch?v=klQsVvh_Fic">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                    </svg>
                                </a>
                            </div>
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 pt-2 pb-2">
                        <div class="zoomer">
                            <img src={chatbot} class="card-img-top" />
                        </div>    
                            <div class="card-body">
                                <div class="card-title">
                                    <div class="h4">Whatsapp Chatbot</div>
                                    <small>By Gajesh Naik</small>
                                </div>
                                <div class="card-text">
                                    Gajesh explains how you can make a whatsapp chatbot using dialogflow 
                                </div>
                                <a href="https://www.youtube.com/watch?v=QLT7n0VrAng">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                    </svg>
                                </a>
                            </div>
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 pt-2 pb-2">
                        <div class="zoomer">
                            <img src={duckduckgo} class="card-img-top" />
                        </div>    
                            <div class="card-body">
                                <div class="card-title">
                                    <div class="h4">DuckDuckGo browser</div>
                                    <small>By The Hardwaron Zone</small>
                                </div>
                                <div class="card-text">
                                    Finding the truth about Google Chrome and its Incognito Mode and a better alternative
                                </div>
                                <a href="https://www.youtube.com/watch?v=2_eAyfLE4ok">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                    </svg>
                                </a>
                            </div>
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 pt-2 pb-2">
                        <div class="zoomer">
                            <img src={head} class="card-img-top" />
                        </div>    
                            <div class="card-body">
                                <div class="card-title">
                                    <div class="h4">Lorem Ipsum</div>
                                    <small>By Lorem Ipsum</small>
                                </div>
                                <div class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper sapien magna, gravida aliquet tellus imperdiet et.
                                </div>
                                <a href="#">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                    </svg>
                                </a>
                            </div>
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 pt-2 pb-2">
                        <div class="zoomer">
                            <img src={creators} class="card-img-top" />   
                        </div>    
                            <div class="card-body">
                                <div class="card-title">
                                <div class="h4">Creators Of Goa</div>
                                    <small>By Kabir Naik</small>
                                </div>
                                <div class="card-text">
                                    Another Masterpeice showcasing the budding creators of Goa
                                </div>
                                <a href="https://www.youtube.com/watch?v=QysvDwDHdyE">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                    </svg>
                                </a>
                            </div>
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 pt-2 pb-2">
                        <div class="zoomer">
                            <img src={covidan} class="card-img-top" />
                        </div>    
                            <div class="card-body">
                                <div class="card-title">
                                    <div class="h4">Covid 19 data Analisation</div>
                                    <small>By Gajesh Naik</small>
                                </div>
                                <div class="card-text">
                                    Learn to Analyse, Visualise and Compare COVID 19 Data using Python
                                </div>
                                <a href="https://www.youtube.com/watch?v=OheJ0T23uiU">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                    </svg>
                                </a>
                            </div>   
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 pt-2 pb-2">
                        <div class="zoomer">
                            <img src={ocr} class="card-img-top" />
                        </div>
                            <div class="card-body">
                                <div class="card-title">
                                    <div class="h4">Understanding OCR</div>
                                    <small>by The Hardwaron Zone</small>
                                </div>
                                <div class="card-text">
                                    Understand the concept of OCR or Optical Character Recognition
                                </div>
                                <a href="https://www.youtube.com/watch?v=AMMA9wlRsBk">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                    </svg>
                                </a>
                            </div>      
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 offset-md-3 offset-xl-0  offset-sm-0 pt-1 pb-1">
                        <div class="zoomer">  
                            <img src={head} class="card-img-top" />
                        </div>    
                            <div class="card-body">
                                <div class="card-title">
                                    <div class="h4">Lorem Ipsum</div>
                                    <small>By Lorem Ipsum</small>
                                </div>
                                <div class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper sapien magna, gravida aliquet tellus imperdiet et.
                                </div>
                                <a href="#">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                    </svg>
                                </a>
                            </div>    
                    </div>
                </div>
            </div>
        )
    }
}
export default Latest;