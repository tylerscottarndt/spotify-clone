// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = '1bdfeeaf5946418b81ced41d474c67a9';

// scopes
// like a CRUD workaround on how to manipulate their Spotify via this app
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
];

/** 
"%20" is the ASCII notation for the space
URL Encoding converts characters into a format that can be transmitted over the internet.
response_type=token is just asking the endpoint to return us a token (string) proving the user has been authenticated
show_dialog=true is the GUI prompt that comes up
*/
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
    // window.location returns the URL of the current page
    // the .hash returns everything after the '#' in the URL
    return window.location.hash
        .substring(1, window.location.hash.indexOf('&')) // this basically removes the hash from the anchor, by taking everything from position 1, inclusive, onward to the end
        .split('&') // gives us array of all the params in the form ["key=value", ... ]
        .reduce((initial, item) => {
            // initial = initial value of the reduce (i.e. accumulator)
            // item = element (key-val param) we get every time it loops through (i.e. currentVal)
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;

            // empty object below, basically says what the 'initial' should initialize as
        }, {});
};
