import React from 'react';

const Card = () => {
  return (
    <div className="card bg-gray rounded-lg shadow-md p-1 hover:shadow-xl transition duration-300 cursor-pointer">
        <img className="card--image mt-4" src="/Ecommerce.png" />
      <h1 className="card--name text-2xl font-bold text-gray-800 mt-4">Tijolo</h1>
      <span className="card--details text-gray-500">$20,00</span>
    </div>
  );
};

export default Card;