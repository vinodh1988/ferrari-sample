import React from 'react';

const SocialCard=({messages,image})=>{
    return(
        <div class="social-card">
           <div id="social-icon">
                <img src={image} alt="icon" height="70" width="70"></img>   
            </div>
            <div id="messages">
            <ul>
                 {messages.map(x=><li>{x}</li>)}
            </ul>
            </div>  
        </div>
    )
}

export default SocialCard;