import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const ItemShoppingListWrapper = styled.View<{status:"completed"|"pending"|"saved"}>`
    background-color: ${({theme})=> theme.codename_colors.gray};
    flex:1;
    border-bottom-width: 1.5px;
    border-bottom-right-radius: 0px;
    border-bottom-color:${({theme})=> theme.codename_colors.gray_2};

    ${({theme,status})=> status === 'saved' && css`
        background-color: ${theme.codename_colors.green_0};
    `}

`;

export const ItemShoppingListTitle = styled.Text`
    font-family: ${({theme})=> theme.font.regular};
    font-size: ${RFValue(16)}px;
    color: ${({theme})=> theme.colors.text};
    line-height: 24px;
`;

export const ItemShoppingListDatetime = styled.Text`
    font-size: ${RFValue(12)}px;
    line-height: 18px;
    color: ${({theme})=> theme.codename_colors.gray_4};
`;

export const ItemShoppingListBody = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const ItemShoppingListBodyInfo = styled.View`
    flex: 1;
    padding: 10px;
`;

export const ItemShoppingPrice = styled.Text<{status:"completed"|"pending"|"saved"}>`
    font-weight: 700;
    font-size: ${RFValue(14)}px;
    line-height: 21px;
    margin-top:10px;
    ${({theme, status})=> status === 'completed' && css`
    
        color: ${theme.codename_colors.green_5};
    ` }

    ${({theme, status})=> status === 'pending' && css`
    
        color: ${theme.codename_colors.gray_4};
    `}

    ${({theme, status})=> status === 'saved' && css`
    
        color: ${theme.codename_colors.gray_6};
    `}
`;

export const ItemShoppingListBodyInfoDetails = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: space-between; 
    align-items: baseline;
`;

export const ItemShoppingListTotalItems = styled.Text`
    font-size: ${RFValue(14)}px;
    line-height: 21px;
    font-weight: ${({theme})=>theme.font.medium};
    color: ${({theme})=>theme.codename_colors.gray_5};
`;

export const ItemShoppingListActions = styled.View`
    flex-direction: row;
    height: 100%;
`;

export const ItemShoppingListButtonAction = styled.TouchableOpacity`
    padding: 18px 10px;
    height: 100%;
    align-items: center;
    justify-content: center;
`;
