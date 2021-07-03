import React from 'react';
import './styles/auto.css'
import  background from  '../images/background.jpg';
import CarSlide from './CarSlide';
import {cardata} from './data/data'
import gtc from '../images/800px-Ferrari_GTC4lusso_T_-_Exterior_(cropped).jpg'
import tributo from '../images/1024px-Ferrari_F8_Tributo_Genf_2019_1Y7A5665.jpg'
import portofino from '../images/1280px-2018_Ferrari_Portofino_S-A_3.9_Front.jpg'
import superfast from '../images/1280px-2019_Ferrari_812_Superfast_S-A_6.5.jpg'
import stradale from '../images/1280px-Red_2019_Ferrari_SF90_Stradale_(48264238897)_(cropped).jpg'
import left from '../images/left.png'
import right from '../images/right.png'

class Auto extends React.Component{
    constructor(){
        super();
        this.state ={
            cararray: cardata,
            images :[gtc,tributo,portofino,superfast,stradale],
            current: 0
        }
        this.currentChange = this.currentChange.bind(this);
    }
    currentChange(type){
        console.log("Event working")
       let current =this.state.current;
        if(type==="left")
           {
              if(current === 0)
                 current = 4
              else
                 current--
           }
        else{
            if(current === 4)
                current = 0
           else
                 current++
        }
        this.setState({current: current})
    }
    render(){
        return(
            <div id="auto-content" style={{backgroundImage: 'url('+background+')'}}>
            <div id="left-arrow" class="arrow" ><img   onClick={()=>this.currentChange('left')} src={left} alt="left" height="30" width="30"></img></div>
            <div id="right-arrow" class="arrow" ><img src={right} alt="left" onClick={()=>this.currentChange('right')} height="30" width="30"></img></div>
           
            <CarSlide cardata={this.state.cararray[this.state.current]} image={this.state.images[this.state.current]}></CarSlide>
            </div>
        )
    }
}

export default Auto;