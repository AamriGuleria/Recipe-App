import React,{useState,useEffect} from 'react'
import "./components/cardStyles.css"
import Recipe from "./components/Recipe"
import Navbar from "./Navbar.js"
import {errorPage} from "./components/errorPage.js"
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
const App = () => {
  
  return(
    <div className="App">
      <Navbar/>
    </div>
      
  )

      }
export default App

//`www.themealdb.com/api/json/v1/1/filter.php?c=${query}`
//https://api.edamam.com/search?q=fish&app_id=f973bd6c&app_key= 793bf9bfc1966e765d09c7621c4edd59
// onSubmit={getSearch}