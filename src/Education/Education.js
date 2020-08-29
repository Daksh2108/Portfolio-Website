import React, {Component}from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import rupic from '../assets/im6.jpg'
import '../css/bootstrap.css';





export default class Education extends Component{
render (){
    return(
        
      <div className="Project"> 

      
      <main>
      <Jumbotron className="aboutEducation">

      <h1 className="eduIntro">
                            Rutgers University - New Brunswick
                        </h1>

          <hr className='highlight2'></hr>

          <ul>
          <li>

          <h1 className="ed1"><b>Degree: </b> Major in Computer Science - Bachelor of Science </h1>
          </li>


          </ul>

   </Jumbotron >

<Jumbotron className ="rut">

<img src={rupic} className="ru-image" alt="logo"/>

</Jumbotron>

  

      </main>

     
      </div>
    );

   }
  
  }
  
