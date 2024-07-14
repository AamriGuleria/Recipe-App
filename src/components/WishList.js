import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import {Link,Redirect} from "react-router-dom"
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import EmptywishList from "./EmptywishList"
import "./cardStyles.css"
const WishList = () => {
  const [w, setw] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const auth = getAuth();
    // console.log(auth)
    const user = auth.currentUser;//gives me the access token

    if (!user) {
      console.error('User not authenticated');
      return;
    }
        const database = getDatabase();
        const userWishlistRef = ref(database, `wishlist/${user.uid}`);//reference to a specific location in the db
        //wishlist node reference in the database
    onValue(userWishlistRef , (d) => {
      const data = d.val();
      if (data) {
        const wishlistArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setw(wishlistArray);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching wishlist:', error);
      setLoading(false);
    });

  }, []);

  const handleDelete = async (id) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.error('User not authenticated');
      return;
    }

    const database = getDatabase();
        const itemRef = ref(database, `wishlist/${user.uid}/${id}`);
        remove(itemRef)
            .then(() => {
                console.log('Item removed from wishlist');
            })
            .catch((error) => {
                console.error('Error removing item from wishlist:', error);
            });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {w.length > 0 ? (
        <div>
        {w.map(item => (
        <div className="left" key={item.id}>
        <center>
      <div className='top'>
      <h4 className="title-name">{item.title}</h4>
      </div>
      <img src={item.image} className='image'/>
      <p className="calories"><h4>Calories-{Math.round(item.calories)}</h4></p>
      <div>
      <Link to="/details" state={{title:item.title,image:item.image,ingredients:item.ingredients,health:item.healthl,url:item.url}} className="info"><img src="/next.png"/></Link>
      <button className="info2" onClick={() => handleDelete(item.id)}><img src="/trash.png"/></button>
      </div>
      </center>
      </div>
      ))}
      </div>
      ) : (
        <EmptywishList/>
      )}
    </div>
  );
};

export default WishList;
