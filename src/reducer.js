// initial state of the data layer
export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: null,
};

// action is how we manipulate the state
const reducer = (state, action) => {
    console.log(action);

    // action has two things: type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                // without this spread operator, you will override everything in the current state
                ...state,
                // here, we are saying we only want to override the 'user' property of the state
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        default:
            return state;
    }
};

export default reducer;
