import React,{useState} from 'react'
import Details from "./Details.js"
import { db,collection,addDoc } from '../firebase';
import "./cardStyles.css"
import {Link,Redirect} from "react-router-dom"
const Recipe =({wishlisted,title,calories,image,ingredients,healthl,url})=> {
  const [wishlist,setwishlist]=useState([])
  const handleWishList=async ()=>{
    const recipeObject = {
      title: title,
      calories: calories,
      image: image,
      ingredients: ingredients,
      healthl: healthl,
      url: url
    };
    console.log("wishlist")
  }
  return (
      <div className="left">
        <center>
      <div className='top'>
      <h4 className="title-name" onClick={handleWishList}>{title}</h4>
      {/* <img src="/h2.png" height="10px" width="10px"></img> */}
      </div>
      <img src={image} className='image'/>
      <p className="calories"><h4>Calories-{Math.round(calories)}</h4></p>
      <div>
      <Link to="/details" state={{title:title,image:image,ingredients:ingredients,health:healthl,url:url}} className="info"><img src="/next.png"/></Link>
      </div>
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