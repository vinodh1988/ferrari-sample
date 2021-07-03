import React from 'react';
import './styles/store.css';
import {cardata}  from './data/data'
import gtc from '../images/800px-Ferrari_GTC4lusso_T_-_Exterior_(cropped).jpg'
import tributo from '../images/1024px-Ferrari_F8_Tributo_Genf_2019_1Y7A5665.jpg'
import portofino from '../images/1280px-2018_Ferrari_Portofino_S-A_3.9_Front.jpg'
import superfast from '../images/1280px-2019_Ferrari_812_Superfast_S-A_6.5.jpg'
import stradale from '../images/1280px-Red_2019_Ferrari_SF90_Stradale_(48264238897)_(cropped).jpg'


class Store extends React.Component{
    constructor(){
        super();
        this.state={
            cardata: cardata,
            current: 0,
            images :[gtc,tributo,portofino,superfast,stradale]
            
        }
    }

    componentDidMount(){
        setInterval(()=>
          this.setState({current: Math.round(Math.random()*4)}), 12000);
    }

    render(){
        return(
            <div id="store">
                <div id="store-title">
                    {this.state.cardata[this.state.current].name}
                </div>
                <div id="store-pic">
                <img src={this.state.images[this.state.current]} alt="car"></img>
                </div>
                <div id="store-shop">
                    <button>Visit the nearest Showroom</button>
                </div>
                <div id="store-video">
                <iframe  title="carvideo"
           src={this.state.cardata[this.state.current].youtubeurl+"?autoplay=1&controls=0"} 
           frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          
                </div>
            </div>
        )
    }
}

export default Store;