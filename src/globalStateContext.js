import React, {createContext, useContext, useReducer} from 'react';//Global States
export const initialState = {
   collapsed1:  true
};
//This reducer takes any key/value pair and put into the global state object.
export const reducer = (state, update) => {
  console.log("Set Global State "+JSON.stringify(update));
  
  let newState = {...state, ...update}
  return newState;
};
export const StateContext = createContext();
export const StateProvider = ({reducer, initialState, children}) =>(
<StateContext.Provider value={useReducer(reducer, initialState)}>
{children}
</StateContext.Provider>
);
export const useGlobalState = () => useContext(StateContext);