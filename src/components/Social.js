import React from 'react';
import twitter from '../images/twitter.png';
import fb from '../images/fb.png';
import youtube from '../images/youtube.png';
import instagram from '../images/instagram.png';
import SocialCard from './SocialCard';
import ferrari from '../ferrari_PNG10665.png';
import './styles/socialcard.css';

class Social extends React.Component{
    constructor(){
        super();
        this.state={
            messages:[
                ["Ferrari Official","Scuderia Official","Ferrari Races","FDA","Scuderia Ferrari Collection","Musei Collection"],
                ["Ferrari Official","Scuderia Official","Ferrari Races","Ferrari Driver Academy","Scuderia Ferrari Collection","Musei Collection"],
                ["Ferrari Official","Scuderia Official","Ferrari Races","FDA","Scuderia Ferrari Collection","Musei Collection"],
                ["Ferrari Official"]],
            images: [fb,twitter,instagram,youtube]
            
        }
    }
    render(){
        return(
            <div>
           <div id="social-image">
               <img src={ferrari} alt="ferrari" height="120" width="120"></img>
           </div>
           <div id="social-content">
               {this.state.messages.map((x,index)=><SocialCard messages={x} 
               image={this.state.images[index]} key={x}></SocialCard>)}
           </div>
           </div>
        )
    }
}

export default Social;