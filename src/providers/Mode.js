import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ModeContext = createContext(null);

export const Mode = ({ children }) => {
    const location = useLocation();
    const mode = window.localStorage.getItem('mode');
    const [myMode, setMyMode] = useState(mode);

    const getMode = () => {
        if (window.localStorage.getItem('mode')) {
            let activeMode = window.localStorage.getItem('mode');
            setMyMode(activeMode);
        } else {
            window.localStorage.setItem('mode', 'light');
            setMyMode('light');
        }
    }

    const toogleMode = () => {
        console.log(myMode);
        if (myMode === 'light') {
            setMyMode('dark');
            window.localStorage.setItem('mode', 'dark');
        } else {
            setMyMode('light');
            window.localStorage.setItem('mode', 'light');
        }
    }



    useEffect(() => {
        getMode()
        return () => {
            window.scrollTo(0, 0);
        }
    }, [location.key]);

    return (
        <ModeContext.Provider value={{ myMode, toogleMode }}>
            {children}
        </ModeContext.Provider>
    )
}

export const useMode = () => {
    return useContext(ModeContext);
}