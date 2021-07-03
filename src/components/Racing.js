import React from 'react';
import './styles/racing.css';

class Racing extends React.Component{
    render(){
        return(
          <div id="racing">
                 <iframe
                  title="racing"
                  src="https://www.youtube.com/embed/aSULzpn1esA?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0&loop=1" 
                  frameborder="0" 
                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen></iframe>
          </div>
        )
    }
}

export default Racing;