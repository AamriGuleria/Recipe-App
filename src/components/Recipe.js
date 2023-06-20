import React,{useState} from 'react'
import Details from "./Details.js"
import "./cardStyles.css"
import {Link,Redirect} from "react-router-dom"
const Recipe =({title,calories,image,ingredients,healthl})=> {
  const [minute,setminute]=useState(false)
  const [img,setimg]=useState("")
  const [titl,settitl]=useState("")
  const [ingre,setingre]=useState([])
  const [health,sethealth]=useState([])

  const change=()=>{
    setminute(true);
   
  }
  return (
    
    <div>
      <div className="left" onClick={change}>
        <center>
      <h4 className="title-name">{title}</h4>
      <img src={image} height="220px" width="220px" className='image'/>
      <p className="calories"><h4>Calories-{Math.round(calories)}</h4></p>
      </center>
      </div>
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