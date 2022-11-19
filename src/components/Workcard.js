import "./WorkCardStyles.css";
import React from 'react'

import { NavLink } from "react-router-dom";

const Workcard = (props) => {
  return (
   
   
   
            <div className="project-card">
                <img src={props.imgsrc} alt="image"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="project-details">
                  <p>{props.text}</p>  
                  <div className="pro-btns">
                  <a href={props.view} className="btn">View</a>
                  <a href={props.src} className="btn">Source</a>
                   
                  </div>
                </div>
            </div>

    
  )
}

export default Workcard