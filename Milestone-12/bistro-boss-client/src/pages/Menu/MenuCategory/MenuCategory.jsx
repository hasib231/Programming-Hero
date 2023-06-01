import React from 'react';
import MenuItem from '../../Home/Home/Shared/MenuItem/MenuItem';
import Cover from '../../Home/Home/Shared/Cover/Cover';

const MenuCategory = ({ items,title, img }) => {
    return (
      <div className="mt-28 ">
        {title && <Cover img={img} title={title}></Cover>}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </div>
    );
};

export default MenuCategory;