import "styled-components/";
import theme  from "../global/ReactTheme";

declare module "styled-components" {
    type ThemeType = typeof theme
    export interface DefaultTheme extends ThemeType { }
}