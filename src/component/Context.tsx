import React, {createContext, useState, useEffect, ReactNode} from "react";
import { ContextType } from "./Interface";
import { Theme_font } from "./Types";
const Context =  createContext<ContextType|null>(null);

interface ProviderProps {
    children: ReactNode; // This will allow you to wrap your provider around other components
  }


function Provider({children}:ProviderProps) {

    const [theme_font, Set_theme_font] = useState<Theme_font>({
        theme:"dark",
        fontSize:14
    });
    return (
      <Context.Provider
      value={{ 
        theme_font, 
        Set_theme_font
       }}
      >
        {children}
      </Context.Provider>
    )
}

export {Provider, Context}
