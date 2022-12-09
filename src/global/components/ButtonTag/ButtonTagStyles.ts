
import styled, { css }  from 'styled-components/native'

interface ButtonTagWrapperProps{
 isActive?:boolean;
}
export const ButtonTagWrapper = styled.TouchableOpacity<ButtonTagWrapperProps>`

  
    ${({theme,isActive})=> isActive && css`
        background-color: ${theme.codename_colors.blue};
    `}; 

    min-width:72px;
    height:23px;
    padding: 0px 8px;                                                                     
    border-radius: 6px;
    justify-content: center;
    text-align: center;
    align-items: center;

`;

export const ButtonTagTitle = styled.Text`
    line-height:23px;
    font-size: 14px;
    font-family: ${({theme})=> theme.font.regular};

`;