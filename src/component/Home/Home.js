import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>

            <h3>This is home</h3>
            <h5>User: Welcome to {user.displayName}</h5>
            
        </div>
    );
};

export default Home;