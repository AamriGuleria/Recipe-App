import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import {EmptywishList} from "./EmptywishList"
const WishList = () => {
  const [w, setw] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.error('User not authenticated');
      return;
    }

    const database = getDatabase();
    const wishlistRef = ref(database, 'wishlist');

    onValue(wishlistRef, (snapshot) => {
      const data = snapshot.val();
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

    try {
      const database = getDatabase();
      await remove(ref(database, `wishlist/${id}`));
      setw(w => w.filter(item => item.id !== id));
      alert('Recipe removed from wishlist');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {w.length > 0 ? (
        <ul>
          {w.map(item => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>Calories: {item.calories}</p>
              <img src={item.image} alt={item.title} />
              <p>Ingredients: {item.ingredients.join(', ')}</p>
              <p>Health Labels: {item.healthl.join(', ')}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">Recipe Link</a>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        // <EmptywishList/>
        <p></p>
      )}
    </div>
  );
};

export default WishList;
