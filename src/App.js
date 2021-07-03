import React from 'react';
import Menubar from './components/Menubar';
import './index.css';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ferrari from './ferrari_PNG10665.png';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Auto from './components/Auto';
import Racing from './components/Racing';
import Store from './components/Store';
import Social from './components/Social';
const Home = ()=>{

   return(
     <Router>
     <div id="container">
     <Menubar></Menubar>
     <div id="main-content">
          <Route path="/" exact component={Auto}></Route>
          <Route path="/racing" component={Racing}></Route>
          <Route path="/social" component={Social}></Route>
          <Route path="/store" component={Store}></Route>
      </div>
      <div id="news-letter"> Subscribe to Ferrari News letter<SubscriptionsIcon></SubscriptionsIcon></div>
      <div id="footer-ferrari">
      <img src={ferrari} alt="Ferrari" height="100" width="100"/> <br/>
      Ferrari
Ferrari N.V. - Holding company - A company under Dutch law, having its official seat in Amsterdam, the Netherlands and its corporate address at Via Abetone Inferiore No. 4, I-41053 Maranello (MO), Italy, registered with the Dutch trade register under number 64060977<br/>

Ferrari S.p.A. - A company under Italian law, having its registered office at Via Emilia Est No. 1163, Modena, Italy, Companies’ Register of Modena, VAT and Tax number 00159560366 and share capital of Euro 20,260,000 <br/>

Copyright 2020 - All rights reserved
      </div>
      <div id="footer-menu">
          <ul>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
              <li>Contacts</li>
              <li>Media Center</li>
              <li>Career</li>
              <li>Corporate</li>
          </ul>
      </div>
     </div>
     </Router>
   )
}
export default Home;
