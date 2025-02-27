import { GlobalStyles } from "@mui/material";
import { createContext, ReactNode, useState } from "react";

export const DarkModeContext=createContext<DarkModeContexttype>({darkMode:false,setDarkMode: () => {}})
export type DarkModeContexttype = {
    darkMode:boolean
   setDarkMode: any
}
interface DarkModeProviderProps{
    children: ReactNode
}

export default function DarkModeProvider({children}:DarkModeProviderProps){
    const [darkMode,setDarkMode]=useState(false)
    return <DarkModeContext.Provider value={{darkMode,setDarkMode}}>
        <GlobalStyles styles={{ body : { backgroundColor: darkMode ? "#444" : undefined }}} />
        {children}

    </DarkModeContext.Provider>
}