import React from 'react';
import { addToDB, removeFromDB } from '../utility/fackDB';

const Food = ({food}) => {
    const {_id, foodName, price} = food;
    // console.log(food);

    const handleAddToAart = (id) => {
        addToDB(id);
    }

    const handleDelete = (id) =>{
        removeFromDB(id)
    }

    return (
        <div className='food'>
            <h3>Name: {foodName}</h3>
            <p>Price: {price}</p>
            <button onClick={() => handleAddToAart(_id)}>Add To Cart</button>
            <button onClick={() => handleDelete(_id)}>Remove</button>
        </div>
    );
};

export default Food;