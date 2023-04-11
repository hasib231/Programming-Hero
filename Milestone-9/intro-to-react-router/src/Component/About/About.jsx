import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const About = () => {
    const friends = useLoaderData();
    // console.log(friends);
    return (
        <div>
            <h3>About page</h3>
            <h2>These are my friends: {friends.length}</h2>
            <div>
                {
                    friends.map(friend => <Friend
                        key={friend.id}
                        friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default About;