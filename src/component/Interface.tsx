import { Theme_font } from "./Types"
// Define the type for the state
type StateType = string | number | boolean | object | []


// Define the type for your context value
export interface ContextType {
    // Add the properties and methods you want to expose in the context
    // like what React Hook and Reducer you want to pass in the context api 
    theme_font:Theme_font | null,
    Set_theme_font:React.Dispatch<React.SetStateAction<Theme_font>>
  }