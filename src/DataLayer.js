import React, { createContext, useContext, useReducer } from 'react';

// prepare data layer
export const DataLayerContext = createContext();

//  initialState ->  initial state of the data layer
//  reducer ->       the listener waiting for actions to be performed
//  children ->       anything else we want nested inside DataLayer

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

// whenever I want to get a value FROM or dispatch an action TO the data layer
// I need some way to actually get access to the data layer
export const useDataLayerValue = () => useContext(DataLayerContext);
