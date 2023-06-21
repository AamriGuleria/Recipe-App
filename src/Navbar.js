// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import "./components/cardStyles.css"
import Recipe from "./components/Recipe"
import {Link} from "react-router-dom"
const Navbar = () => {
  const [recipes, setRecipes] = useState([]);
  const [check, setcheck] = useState(true)
  const [search, setSearch] = useState("");
  console.log(recipes)
  const getData = async (query) => {
    const a = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=f973bd6c&app_key=793bf9bfc1966e765d09c7621c4edd59`
    const res = await fetch(a);
    const f = await res.json()
    const data = f.hits;
    setRecipes(data)

  }

  const getSearch = e => {
    e.preventDefault();
    setSearch("");
    getData(search)
    setcheck(false)
  }
  const drinks=async()=>{
    const a = `https://api.edamam.com/api/recipes/v2?type=public&app_id=f973bd6c&app_key=793bf9bfc1966e765d09c7621c4edd59&dishType=drinks`
    const res = await fetch(a);
    const f = await res.json()
    const data = f.hits;
    setcheck(false)
    setRecipes(data)
  }
  const starters=async()=>{
    const a = `https://api.edamam.com/api/recipes/v2?type=public&app_id=f973bd6c&app_key=793bf9bfc1966e765d09c7621c4edd59&dishType=starter`
    const res = await fetch(a);
    const f = await res.json()
    const data = f.hits;
    setcheck(false)
    setRecipes(data)
  }
  const main=async()=>{
    const a = `https://api.edamam.com/api/recipes/v2?type=public&app_id=f973bd6c&app_key=793bf9bfc1966e765d09c7621c4edd59&dishType=main course`
    const res = await fetch(a);
    const f = await res.json()
    const data = f.hits;
    setcheck(false)
    setRecipes(data)
  }
  const desserts=async()=>{
    const a = `https://api.edamam.com/api/recipes/v2?type=public&app_id=f973bd6c&app_key=793bf9bfc1966e765d09c7621c4edd59&dishType=desserts`
    const res = await fetch(a);
    const f = await res.json()
    const data = f.hits;
    setcheck(false)
    setRecipes(data)
  }
  return (
    <>
      <div className="Nav">
        <div className="form">

          <form className="search-form" onSubmit={getSearch}>
            <div className="side-bar">
              <img src="/hot-pot.png" className="icon" />
              <p className="main-heading">Cookery</p>
            </div>
            <center>
              <input className="search-bar" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search...." name="query" />
              <button className="search-bar1" type="submit" onClick={getSearch}><img src="/search.png" className="search" height="30px" width="30px"></img></button>
            </center>
          </form>
        </div>
        <center>
          <div className='mealType'>
            <button type="submit" className="button" onClick={drinks}>Drinks</button>
            <button type="submit" className="button" onClick={desserts}>Desserts</button>
            <button type="submit" className="button" onClick={starters}>Starter</button>
            <button type="submit" className="button" onClick={main}>MainCourse</button>
          </div>
          </center>
      </div>
      <div className={check?"subs":"none"}>
        <center>
      <div className="hide">
        <p className="hide-theory">USE THE SEARCH BAR FOR ANY RECIPE 🍽</p>
        <img src="https://media.tenor.com/_gaBd0qapXwAAAAd/victoriabea4-precious.gif" height="300px" width="300px"/>
      </div>
      </center>
      </div>
      <div className="recipes">
        {
          recipes.map(recipe => (
            <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} healthl={recipe.recipe.healthLabels} url={recipe.recipe.url}/>
          ))
        }
      </div>
      <div className="footer">
        <center>
          Made With ❤️ By Aamri 👩🏻
        </center>
      </div>
    </>

  )
}

export default Navbar
// {toggleButton?(<i className="fa fa-edit add-btn" onClick={addItem}></i>
//                 ):(<i className="fa fa-plus add-btn" onClick={addItem}></i>)}