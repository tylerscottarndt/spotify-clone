import React from 'react';
import './Body.css';
import Header from './Header.js';

// a little prop drilling for 'spotify'
function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify} />
        </div>
    );
}

export default Body;
