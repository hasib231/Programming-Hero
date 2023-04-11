import React from 'react';
import './Friend.css'
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { email, name, id, phone } = friend;
    const navigate = useNavigate();
    
    const handleNavigation = () => {
        navigate(`/friend/${id}`);
    }
    return (
      <div className="friend">
        <h3>{name}</h3>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
        <p>
          <Link to={`/friend/${id}`}>show details</Link>
        </p>
        <Link to={`/friend/${id}`}>
          <button>Show more</button>
        </Link>
        <button onClick={handleNavigation}>With handler</button>
      </div>
    );
};

export default Friend;