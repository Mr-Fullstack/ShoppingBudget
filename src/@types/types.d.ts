// THEME 
type ThemesType = {
    [key: string] : Theme;
}

interface ThemeContextProps {
    themeName:'DarkTheme' | 'LightTheme';
    toggleTheme:() => void;
}
