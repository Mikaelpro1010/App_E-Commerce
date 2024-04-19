import React from 'react';

const Card = () => {
  return (
    <div className="card bg-gray rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
        <img className="card--image mt-4 rounded-lg" src="/Ecommerce.png" />
      <h2 className="card--name text-2xl font-bold text-gray-800 mt-2 p-3">Tijolo</h2>
      <span className="card--details text-gray-500 p-3">$20,00</span>
    </div>
  );
};

export default Card;