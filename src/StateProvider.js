//#1 Step in Context API
import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //Creating global store for storage

//Creating the Provider to pass the states to different component

export const StateProvider = ({ reducer, initalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </StateContext.Provider>
);

//Allowing the global store to be accessed and use
export const useStateValue = () => useContext(StateContext);
