import React from 'react';
import head from './Images/hed.jpg';
import './Latest.css';
import pao from "./Images/pao.jpg";
import creators from "./Images/creators.jpg";
import chatbot from "./Images/chatbot.jpg";
import ocr from "./Images/ocr.jpg";
import goaday from "./Images/goaday.jpg";
import covidan from "./Images/covidan.jpg";
import duckduckgo from "./Images/duckduckgo.jpg";
import Cards from './Cards'
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
                        <Cards img="https://i.ytimg.com/vi/qe8cant_b64/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBjDcJoxfdP-UVEByk876BPZVERxQ" title="Render" bytitle="By Kabir Naik" text="The video focusses on  one of goa's traditonal occupation" link="https://www.youtube.com/watch?v=rZcWl7ajSRQ" />
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 pt-2 pb-2">
                        <Cards img={goaday} title="A Day in a Village of Goa" bytitle="By The Local Bus" text="Experience the feeling of living in a village of Goa" link="https://www.youtube.com/watch?v=klQsVvh_Fic" />
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 pt-2 pb-2">
                        <Cards img={chatbot} title="Whatsapp Chatbot" bytitle="By Gajesh Naik" text=" Gajesh explains how you can make a whatsapp chatbot using dialogflow" link="https://www.youtube.com/watch?v=QLT7n0VrAng" />
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 pt-2 pb-2">
                        <Cards img={duckduckgo} title="DuckDuckGo browser" bytitle="By The Hardwaron Zone" text="Finding the truth about Google Chrome and its Incognito Mode and a better alternative" link="https://www.youtube.com/watch?v=2_eAyfLE4ok" />
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 pt-2 pb-2">
                        <Cards img={head} title="Lorem Ipsum" bytitle="By Lorem Ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper sapien magna, gravida aliquet tellus imperdiet et." link="#" />
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 pt-2 pb-2">
                        <Cards img={creators} title="Creators Of Goa" bytitle="By Kabir Naik" text="Another Masterpeice showcasing the budding creators of Goa" link="https://www.youtube.com/watch?v=QysvDwDHdyE" />
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 pt-2 pb-2">
                        <Cards img={covidan} title="Covid 19 data Analisation" bytitle="By Gajesh Naik" text="Learn to Analyse, Visualise and Compare COVID 19 Data using Python" link="https://www.youtube.com/watch?v=OheJ0T23uiU" />
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 pt-2 pb-2">
                        <Cards img={ocr} title="Understanding OCR" bytitle="By The Hardwaron Zone" text="Understand the concept of OCR or Optical Character Recognition" link="https://www.youtube.com/watch?v=AMMA9wlRsBk" />      
                    </div>
                    <div class="col-12 col-xl-4 col-md-6 col-sm-12 offset-md-3 offset-xl-0  offset-sm-0 pt-1 pb-1">
                        <Cards img={head} title="Lorem Ipsum" bytitle="By Lorem Ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper sapien magna, gravida aliquet tellus imperdiet et." link="#" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Latest;