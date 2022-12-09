
const Colors = {
    "gray_6":"#333",
    "gray_5":"#555555",
    "gray_4":"#777777",
    "gray_2":"#CCC",
    "gray":"#FBFBFB",
    "green_3":"#4CBA68",
    "green_5":"#2C733F",
    "green_1":"#A8E8B9",
    "green_0":"#F6FDF8",
    "orange_3":"#EE8700",
    "blue":"#CAE3F7"
}


 export const LightTheme = {
     name:"LightTheme",
     colors:{
        "primary":Colors.orange_3,
        "secondary":Colors.green_3,
        "text":Colors.gray_6,
    }
}

export const DarkTheme = { 
    name:"DarkTheme",
    colors:{
        "primary":Colors.orange_3,
        "secondary":Colors.green_3,
        "text":Colors.gray_6,
    }
}

 const font = {
    medium:'Saira-Medium',
    regular:'Saira-Regular',
    bold:'Saira-Bold'
}

export interface AppTheme  {
    name:'DarkTheme' | 'LightTheme';
    codename_colors:typeof Colors;
    colors:typeof DarkTheme.colors;
    font:typeof font;
}

export default {
    name:'LightTheme',
    codename_colors:Colors,
    colors:DarkTheme.colors,
    font:font,
}