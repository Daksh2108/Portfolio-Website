import React, {Component}from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import github from '../assets/download.png'


export default class Projects extends Component{
render (){
    return(
      <div className="Project"> 
      <main>
      <Jumbotron className="projectIntro">
      <hr className='highlight'></hr>
   <h1 style={{color: 'white'}}>(◍•ᴗ•◍) Welcome To My Projects (◍•ᴗ•◍)</h1>
   
   
   <hr className='highlight'></hr>

   </Jumbotron>

      <Jumbotron className="firstProject">

        <ul>

          <h1 className ="firstTitle">
             GIT REPLICA 
          </h1>   
          <li>
          Created a Git from scratch using version control in C allowing multiple clients to connect using multi-threading.
          </li>
          <li>
          Supports features like update/upgrade, commit/push, rollback, etc. 
          </li>
         
        </ul>

    
        </Jumbotron>


        <Jumbotron className="secondProject">

        <ul>

          <h1 className ="secondTitle">
           PUT ME ON 
          </h1>   
          <li>
          Website built using React to recommend artists that are linked to your favorite musicians. 
          </li>
          <li>
           Algorithm determines the optimal route between the artists using song genres and collaborators and finds a path from one artist to another based on the discogrophy of other artists in between. It's a great way to be introduced to new artists and genres!  
          </li>
          <li>
          Programmed in JavaScript/HTML and deployed using Heroku saving annual on website hosting. 
          </li>
         
         
        </ul>

    
        </Jumbotron>


        <Jumbotron className="thirdProject">

        <ul>

          <h1 className ="thirdTitle">
          WORTH THE WEIGHT 
          </h1>   
          <li>
          App built using Java to motivate individuals to continue pursuing a healthy lifestyle. 
          </li>
          <li>
          Filled with workouts that cater to may differently types of exercise.   
          </li>
        
        </ul>

    
        </Jumbotron>

        <Jumbotron className="fourthProject">

        <ul>

          <h1 className ="fourthTitle">
          FILE COMPRESSOR
          </h1>   
          <li>
          Program created using C that allows users to compress and decompress text file into binary code to reserve space for other needs. 
          </li>
          <li>
          Faster data transmission time    
          </li>
        
        </ul>

    
        </Jumbotron>


        <Jumbotron className="fifthProject">
        <ul>
       <h1 className ="fifthTitle">
       WEATHER TRACKER 
       </h1>   
       <li>
       Created a React based website for weather updates. 
       </li>
       <li>
       Dynamic background changes based on the temperature. 
       </li>
       </ul>
       </Jumbotron>


       <Jumbotron className="sixthProject">
        <ul>
       <h1 className ="sixthTitle">
       PORTFOLIO WEBSITE  
       </h1>   
       <li>
       Created portfolio website using React  .
       </li>
       <li>
       Created website using JavaScript, HTML and CSS. 
       </li>
       </ul>
       </Jumbotron>

       <Jumbotron className="Github">
  
       <h1 className ="githubTitle">
       <b>Note :</b> To checkout my Github please follow my contact me page above, I can't give access to my website because of university restrictions. Thanks for understanding!!!
       </h1>     
       </Jumbotron>
      </main>
      </div>
    );

   }
  
  }
  
