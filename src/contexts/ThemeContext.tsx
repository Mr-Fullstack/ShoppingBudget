import React from 'react'
import { ThemeProvider } from 'styled-components';

import theme, { LightTheme,DarkTheme }  from "../global/ReactTheme";

const themes : ThemesType = {
    DarkTheme,
    LightTheme
}



const AppThemeContext = React.createContext<ThemeContextProps|object>({})
 
function ThemeContext({children}:any) {

    const [appTheme,setAppTheme] = React.useState(theme);

    const [themeName, setThemeName] = React.useState<'DarkTheme' | 'LightTheme'>(themes.LightTheme.name);

    const toggleTheme = () => {
        switch(themeName){
            case"DarkTheme":
                setThemeName(themes["LightTheme"].name);
                break;
            case"LightTheme":
                setThemeName(themes["DarkTheme"].name);
                break;
            default:
                console.log("tema não econtrado")
                break;
        }
         
    }
    React.useEffect(()=>{
        setAppTheme({...appTheme,colors:themes[themeName].colors})
    },[themeName])

    return(
        <AppThemeContext.Provider value={{themeName,toggleTheme}}>
            <ThemeProvider theme={appTheme}>
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    )
}
 
export default ThemeContext;

export const Theme = () =>{
  const theme =  React.useContext(AppThemeContext) as ThemeContextProps;
  return theme;
} 