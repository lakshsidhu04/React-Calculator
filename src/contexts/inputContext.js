import React, { createContext } from "react";
import { useContext } from "react";

export const inputContext = createContext({
    input: "",
    setinput: () => { }
})

export const InputContextProvider = inputContext.Provider;

export const useInputContext = () => {
    return useContext(inputContext)
}
