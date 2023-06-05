import React from 'react';
import MenuItem from '../../Home/Home/Shared/MenuItem/MenuItem';
import Cover from '../../Home/Home/Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items,title, img }) => {
    return (
      <div className="mt-28 ">
        {title && <Cover img={img} title={title}></Cover>}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className='text-center'>
          <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    );
};

export default MenuCategory;