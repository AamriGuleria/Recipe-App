import React,{useState} from 'react'
import Details from "./Details.js"
import "./cardStyles.css"
import {Link,Redirect} from "react-router-dom"
const Recipe =({title,calories,image,ingredients,healthl,url})=> {
  return (
      <div className="left">
        <center>
      <h4 className="title-name">{title}</h4>
      <img src={image} height="220px" width="220px" className='image'/>
      <p className="calories"><h4>Calories-{Math.round(calories)}</h4></p>
      <Link to="/details" state={{title:title,image:image,ingredients:ingredients,health:healthl,url:url}} className="info">Info</Link>
      </center>
      </div>
  )
}

export default Recipe
{/* <div className="ingredients">
        <h2 className="ingre-heading">Ingredients</h2>
        {
          ingredients.map(ingre=>(
            <div className="one-ingre">
            <p>{ingre.text}</p>
            </div>
          ))
        } */}
        
        {/* <h4>Health Labels</h4> */}
      {/* {
          healthl.map(ele=>(
            <p>{ele}</p>
          ))
        } */}
      
    // </div>