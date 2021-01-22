import React from 'react';
import './Body.css';
import Header from './Header.js';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

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

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle body__greenIcon" />
                    <FavoriteIcon
                        className="body__greenIcon"
                        fontSize="large"
                    />
                    <MoreHorizIcon />
                </div>
            </div>
        </div>
    );
}

export default Body;
