import React,{useState,useEffect} from 'react'
import "./components/cardStyles.css"
import Recipe from "./components/Recipe"
import LoginPage from './LoginPage.js'
import Login from "./Login.js"
import Navbar from "./Navbar.js"
import WishList from "./components/WishList.js"
import Details from "./components/Details"
import {errorPage} from "./components/errorPage.js"
import { BrowserRouter, Switch,Routes, Route, Redirect,} from "react-router-dom";
const App = () => {
  
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginPage/>}/>
    <Route path="/login" element={<Login/>}/>
      <Route path="/main" element={<Navbar/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
    </Routes>
    </BrowserRouter>
    </>
      
  )

      }
export default App

//`www.themealdb.com/api/json/v1/1/filter.php?c=${query}`
//https://api.edamam.com/search?q=fish&app_id=f973bd6c&app_key= 793bf9bfc1966e765d09c7621c4edd59
// onSubmit={getSearch}