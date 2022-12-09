import styled from 'styled-components/native';

export const ButtonCircleWrapper = styled.TouchableOpacity`

    align-items:center;
    justify-content:center;
    right: 16px;
    background-color:${({theme})=> theme.codename_colors.orange_3};
    border-radius:100px;
    position: absolute;
    bottom: 16px;
    height: 60px;
    width: 60px;
`;