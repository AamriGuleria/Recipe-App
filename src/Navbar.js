// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import "./components/cardStyles.css"
// import {v4 as uuidv4} from 'uuid'
import Recipe from "./components/Recipe"
import errorPage from "./components/errorPage.js"
import {Link} from "react-router-dom"
const Navbar = () => {
  const [recipes, setRecipes] = useState([]);
  const [check, setcheck] = useState(false)
  const [search, setSearch] = useState("");
  const [isEmpty,setisEmpty]=useState(false)
  const getData = async (query) => {
    const a = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=f973bd6c&app_key=793bf9bfc1966e765d09c7621c4edd59`
    const res = await fetch(a);
    if(res.ok){
    const f = await res.json()
    const data = f.hits;
    if(data.length===0){
      setisEmpty(true)
    }
    setRecipes(data)
  }

  }

  const getSearch = e => {
    e.preventDefault();
    setSearch("");
    getData(search)
    setcheck(true)
    setisEmpty(false)
  }
  const drinks=async()=>{
    const a = `https://api.edamam.com/api/recipes/v2?type=public&app_id=f973bd6c&app_key=793bf9bfc1966e765d09c7621c4edd59&dishType=drinks`
    const res = await fetch(a);
    const f = await res.json()
    const data = f.hits;
    setcheck(true)
    setRecipes(data)
    setisEmpty(false)
  }
  const starters=async()=>{
    const a = `https://api.edamam.com/api/recipes/v2?type=public&app_id=f973bd6c&app_key=793bf9bfc1966e765d09c7621c4edd59&dishType=starter`
    const res = await fetch(a);
    const f = await res.json()
    const data = f.hits;
    setcheck(true)
    setRecipes(data)
    setisEmpty(false)
  }
  const main=async()=>{
    const a = `https://api.edamam.com/api/recipes/v2?type=public&app_id=f973bd6c&app_key=793bf9bfc1966e765d09c7621c4edd59&dishType=main course`
    const res = await fetch(a);
    const f = await res.json()
    const data = f.hits;
    setcheck(true)
    setRecipes(data)
    setisEmpty(false)
  }
  const desserts=async()=>{
    const a = `https://api.edamam.com/api/recipes/v2?type=public&app_id=f973bd6c&app_key=793bf9bfc1966e765d09c7621c4edd59&dishType=desserts`
    const res = await fetch(a);
    const f = await res.json()
    const data = f.hits;
    setcheck(true)
    setRecipes(data)
    setisEmpty(false)
  }
  return (
    <>
      <div className="Nav">
        <div className="form">

          <form className="search-form" onSubmit={getSearch}>
            <div className="side-bar">
              <img src="/hot-pot.png" className="icon" />
              <p className="main-heading">Cook-Book</p>
            </div>
            <center>
              <input className="search-bar" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search...." name="query" />
              <button className="search-bar1" type="submit"><img src="/search.png" className="search" height="40px" width="40px"></img></button>
            </center>
          </form>
        </div>
        <center>
          <div className='mealType'>
            <button type="submit" className="button" onClick={drinks}><img src="/drink.png" height="40px" width="40px"></img></button>
            <button type="submit" className="button" onClick={desserts}><img src="/food.png" height="40px" width="40px"/></button>
            <button type="submit" className="button" onClick={starters}><img src="/tapas.png" height="40px" width="40px"/></button>
            <button type="submit" className="button" onClick={main}><img src="/curry.png" height="40px" width="40px"/></button>
            <Link  className="button" to="/wishlist"><img src="https://imgs.search.brave.com/MTwG-K4f9fVRGYvSSrfXldDNDFZZ7BG0FKjn7aRVk4A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/MC5lbW9qaXMud2lr/aS9lbW9qaS1waWNz/L21lc3Nlbmdlci9y/ZWQtaGVhcnQtbWVz/c2VuZ2VyLnBuZw" height="40px" width="40px"></img></Link>
          </div>
          </center>
      </div>
      <div className={check?"none":"subs"}>
        <center>
      <div className="hide">
        <center>
        {/* <p className="hide-theory">USE THE SEARCH BAR FOR ANY RECIPE <img className="use" height="40px" width="40px" src="/hot-pot.png"></img></p> */}
        <img src="https://media.tenor.com/_gaBd0qapXwAAAAd/victoriabea4-precious.gif" height="300px" width="300px"/>
        </center>
      </div>
      </center>
      </div>
      
      <div className="recipes">
        {
          recipes.map(recipe => (
            <Recipe  wishlisted={"no"} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} healthl={recipe.recipe.healthLabels} url={recipe.recipe.url}/>
          ))
        }
      </div>
      <div className={isEmpty?"error":"bone"}>

          <div className="error-img">
          <img src="/salad.png"/>
          </div>
          <div className="error-content">
            <p className="error-text">OOPS!!</p>
            <p className="error-text">COULD NOT FIND YOUR DESIRED RECIPE</p>
          </div>
      </div>
      {/* <div className="footer">
        <center>
          Made With ❤️ By Aamri
        </center>
      </div> */}
    </>

  )
}

export default Navbar
// {toggleButton?(<i className="fa fa-edit add-btn" onClick={addItem}></i>
//                 ):(<i className="fa fa-plus add-btn" onClick={addItem}></i>)}