import React from 'react'
import "./EmptywishList.css"
const EmptywishList = () => {
  return (
    <div className='wishlist'>
      <center>
      <div className="empty-wishlist">
      <img src="/empty-box.png" alt="Empty Wishlist" />
      <p>Your wishlist is currently empty. Start adding your favorite recipes to keep track of them!</p>
    </div>
    </center>
    </div>
  )
}

export default EmptywishList
