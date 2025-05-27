import React from 'react';

const Logout = ({ onLogout }) => {
    const handleLogout = () => {
        // Remove token from session storage
        sessionStorage.removeItem('token');

        // Call onLogout callback to update app state
        onLogout();
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};
export default Logout;