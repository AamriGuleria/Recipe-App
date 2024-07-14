import React,{useState} from 'react'
import Details from "./Details.js"
import "./cardStyles.css"
import {Link,Redirect} from "react-router-dom"
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, push, get } from 'firebase/database';
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
    const userWishlistRef = ref(database, `wishlist/${user.uid}`);
    try {
      const snapshot = await get(userWishlistRef);
        const existingItems = snapshot.val();

        // Check if the item already exists
        const itemExists = existingItems && Object.values(existingItems).some(item => item.title === title || item.url === url);

        if (itemExists) {
            alert('This recipe is already in your wishlist');
            return;
        }

        // Add new item to wishlist
        const newWishlistRef = push(userWishlistRef);
        await set(newWishlistRef, {
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
      <div className="left">
        <center>
      <div className='top'>
      <h4 className="title-name" onClick={() => handleWishList(title, image, calories, ingredients, healthl, url)}>{title}</h4>
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