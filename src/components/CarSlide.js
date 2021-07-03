import React from 'react';
import './styles/auto.css'
import ferrari from '../ferrari_PNG10665.png';
const CarSlide = ({cardata,image})=>{
    return(
       <div className="car-card">
           <div className="first-col col">
            <div className="left-corner">
                <img src={ferrari} height={100} width={100} alt="icon"></img>
            </div>
                   <h1>{cardata.name}</h1>
                   <p>{cardata.description}</p>
           </div>
           <div className="second-col col">
           <img src={image} alt="car" height="270" width="350"></img> <br/>
           <br/><br/><br/>
           <iframe width="350" height="270" title="carvideo"
           src={cardata.youtubeurl} 
           frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
           </div>
           <div className="third-col col">
           <div className="right-corner">
                <img src={ferrari} height={100} width={100} alt="icon"></img>
            </div>
               <table>
                   <tbody>
                   <tr>
                       <th>Class</th>
                       <td>{cardata.specs.class}</td>
                   </tr>
                   <tr>
                       <th>Body Style</th>
                       <td>{cardata.specs.bodystyle}</td>
                   </tr>
                   <tr>
                       <th>Layout</th>
                       <td>{cardata.specs.layout}</td>
                   </tr>
                   <tr>
                       <th>Engine</th>
                       <td>{cardata.specs.engine}</td>
                   </tr>
                   <tr>
                       <th>Transmission</th>
                       <td>{cardata.specs.transmission}</td>
                   </tr>
                   <tr>
                       <th>Wheelbase</th>
                       <td>{cardata.specs.wheelbase}</td>
                   </tr>
                   <tr>
                       <th>Height</th>
                       <td>{cardata.specs.height}</td>
                   </tr>
                   <tr>
                       <th>Width</th>
                       <td>{cardata.specs.width}</td>
                   </tr>
                   <tr>
                       <th>Height</th>
                       <td>{cardata.specs.height}</td>
                   </tr>
                   <tr>
                       <th>Kerb Weight</th>
                       <td>{cardata.specs.kerbweight}</td>
                   </tr>
                   </tbody>
               </table>
           </div>
       </div>
    );
}

export default CarSlide;