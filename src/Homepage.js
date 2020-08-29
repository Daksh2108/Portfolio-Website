import React, {Component}from 'react'
import profilepic from './assets/im3.jpg'
import Jumbotron from "react-bootstrap/Jumbotron";
 import {Link } from "react-router-dom";



export default class Homepage extends Component{
render (){
  return(
    <div className="App"> 
    <main>
      <Jumbotron className="aboutme">

      <hr className='highlight'></hr>
      <h1 style={{color: 'white'}}>Welcome To My Portfolio</h1>
      <hr className='highlight'></hr>

      </Jumbotron>
    

      <Jumbotron className="personalImage">

      <img src={profilepic} className="App-logo" alt="logo"/>
        
     </Jumbotron>

     <Jumbotron className="intro">
     <h2 style={{color: 'white'} }className="introBody">
     <hr className='highlight'></hr>
       <div className="about">About Me</div> 

       <hr className='highlight'></hr>

I would like to introduce myself as Daksh Tiwari, a senior student at Rutgers University – New Brunswick.     
Currently I am pursuing Bachelor of Science – majoring in Computer Science.     
As a final year student,  I am looking forward to internship at a company where I can implement my programming skills to work developing and testing products for the market place besides gaining corporate experience.    
I am confident that I will put my skills to a good use in your organization. 
        </h2>
     </Jumbotron>
    </main>
    </div>

  );

  }
}
