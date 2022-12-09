import styled from "styled-components/native"
import { RFValue } from 'react-native-responsive-fontsize';


export const ButtonDefaultWrapper = styled.TouchableOpacity`
    background-color: ${({theme})=>theme.codename_colors.orange_3};
   
    margin: 0px 20px;
    padding: 16px 0px;
    border-radius: 8px;
    justify-content: center;
`;

export const ButtonDefaultTitle = styled.Text`
    width: 100%;
    color: #FFF;
    text-align: center;
    font-size: ${RFValue(18)}px;
    font-weight: 700;
`