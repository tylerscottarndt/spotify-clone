import React from 'react';
import './Body.css';
import Header from './Header.js';
import { useDataLayerValue } from './DataLayer';

// a little prop drilling for 'spotify'
function Body({ spotify }) {
    // pull discover_weekly info from data layer
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={discover_weekly?.images[0]?.url} alt="" />
                <div className="body__infoText">
                    <strong> PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Body;
