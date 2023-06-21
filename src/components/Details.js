import React,{useState} from 'react'
import "./cardStyles.css"
import {useLocation} from "react-router-dom"
import {Link} from "react-router-dom"
const Details = () => {
  const [ingre,setingre]=useState([])
  const location=useLocation()
  const {title}=location.state;
  const {image}=location.state;
  const {ingredients}=location.state;
  const {health}=location.state;
  const {url}=location.state;
  console.log(ingredients)
  return (
    <>
    <center>
      <div className="main-cheeze">
        <div className="one">
      <h4 className="aaiya">{title}</h4>
    <img src={image} height="250px" width="250px"/>
    <Link to={url} target="_blank" className="link">INSTRUCTIONS</Link>
    </div>

    <div className="two">
      <h4>Ingredients</h4>
      <div className="each-ingre">
      {
          ingredients.map(recipe => (
            <p>{recipe.text}</p>
          ))
        }
      </div>
    </div>
    <center>
    <div className="three">
        <h4>Health Labels</h4>
        <div className="each-label">
      {
        health.map((i)=>(
        (
          <p className="each">{i}</p>
        )
        ))
      }
      </div>
      </div>
      </center>
    </div>
    
    </center>
    </>
  )
}

export default Details
{/* <div className="recipes">
        {
          recipes.map(recipe => (
            <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} healthl={recipe.recipe.healthLabels} url={recipe.recipe.url}/>
          ))
        }
      </div> */}