import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
    // 'dispatch' is like our special gun that we get to shoot things at the data layer
    const [{ user, token }, dispatch] = useDataLayerValue();

    // run code based on a given condition
    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = '';
        const _token = hash.access_token;

        if (_token) {
            dispatch({
                type: 'SET_TOKEN',
                token: _token,
            });
            spotify.setAccessToken(_token);
            spotify.getMe().then((user) => {
                dispatch({
                    type: 'SET_USER',
                    user: user,
                });
            });
        }

        console.log('I HAVE A TOKEN>>> ', token);
    }, []);

    console.log('USER >>>> ', user);
    console.log('TOKEN >>>> ', token);

    return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
