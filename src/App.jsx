import { useEffect, useState } from 'react'
import './App.css'
import Food from './Food/Food';
import { removeAllFromDB } from './utility/fackDB';

function App() {
  const [foods, setFoods] = useState([]);
  // console.log(foods);

  useEffect(() => {
    fetch('foods.json')
      .then(res => res.json())
      .then(data => setFoods(data))
  }, []);

  const removeAllShoppingCard = () => {
    removeAllFromDB();
  }

  return (
    <>
      <h1>Buy your faburites foods</h1>
      <div className="foods">
        {
          foods?.map(food => <Food key={food._id} food={food} />)
        }
      </div>
      <button onClick={removeAllShoppingCard}>Remove All</button>
    </>
  )
}

export default App
