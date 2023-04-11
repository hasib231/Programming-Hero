import React from 'react';
import { useLoaderData, useNavigate } from "react-router-dom";

const FriendDetail = () => {
    const friend = useLoaderData();
    const navigate = useNavigate();

    const goBackNavigation = () => {
      navigate(-1);
    };
    return (
        <div>
            <h3>All person is here</h3>
            <h4>Name: {friend.name}</h4>
            <p>Phone: {friend.phone}</p>
            <button onClick={goBackNavigation}>Go back</button>
        </div>
    );
};

export default FriendDetail;