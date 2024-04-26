import React from 'react';

const Card = ({name, preco}) => {
  return (
    <div className="card bg-gray rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
        <img className="card--image mt-4 rounded-lg" src="/Ecommerce.png" />
      <h3 className="card--name text-2xl font-bold text-gray-800 mt-2 p-3">{name}</h3>
      <span className="card--details text-gray-500 p-3">{preco}</span>
    </div>
  );
};

export default Card;