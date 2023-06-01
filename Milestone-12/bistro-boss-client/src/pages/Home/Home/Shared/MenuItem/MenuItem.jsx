import React from 'react';

const MenuItem = ({ item }) => {
     const { name, image, price, recipe } = item;
    return (
      <div className="flex space-x-2 w-8/12 mx-auto">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[100px]"
          src="https://media-cdn.tripadvisor.com/media/photo-s/15/9e/05/d1/grilled-prawn.jpg"
          // src={image}
          alt=""
        />
        <div>
          <h3 className="uppercase">{name}----------</h3>
          <p>{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p>
      </div>
    );
};

export default MenuItem;