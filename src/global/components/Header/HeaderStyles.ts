import styled from "styled-components/native";


export const HeaderWrapper = styled.View`
    /* display: flex; */
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    background-color: #FFF;
`;

export const HeaderTitle = styled.Text`
    /* display: flex; */
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    font-size: 16px;
    font-family: ${({theme})=>theme.font.bold};
    color: ${({theme})=>theme.colors.text};
`;