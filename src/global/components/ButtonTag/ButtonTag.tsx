import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { ButtonTagTitle, ButtonTagWrapper } from './ButtonTagStyles';

interface ButtonTagProps extends TouchableOpacityProps {
    title?:string;
}


export default function ButtonTag({title,onPress}:ButtonTagProps) {

    return (
        <ButtonTagWrapper onPress={onPress} isActive={ title ? true : false }> 
            <ButtonTagTitle> {title}</ButtonTagTitle>
        </ButtonTagWrapper> 
    )
}