import React,{useState} from 'react'
import Details from "./Details.js"
import "./cardStyles.css"
import {Link,Redirect} from "react-router-dom"
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, push } from 'firebase/database';
const Recipe =({wishlisted,title,calories,image,ingredients,healthl,url})=> {
  const handleWishList=async (title, image, calories, ingredients, healthl, url)=>{
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.error('User not authenticated');
      alert('You need to be logged in to add to wishlist');
      return;
    }

    const database = getDatabase();
    const wishlistRef = ref(database, 'wishlist');

    try {
      const newWishlistRef = push(wishlistRef);
      await set(newWishlistRef, {
        userId: user.uid,
        title,
        calories,
        image,
        ingredients,
        healthl,
        url
      });
      alert('Recipe added to wishlist');
    } catch (error) {
      console.error('Error adding document:', error);
    }
  }
  return (
      <div className="left" onClick={() => handleWishList(title, image, calories, ingredients, healthl, url)}>
        <center>
      <div className='top'>
      <h4 className="title-name" onClick={handleWishList}>{title}</h4>
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