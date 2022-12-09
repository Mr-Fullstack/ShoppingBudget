import { View, Text, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { ButtonDefaultTitle, ButtonDefaultWrapper } from './ButtonDefaultStyles'


interface ButtonDefaultProps extends TouchableOpacityProps{
    title:string;
}
export default function ButtonDefault({title,...props}:ButtonDefaultProps) {

  return (
    <ButtonDefaultWrapper {...props} >
      <ButtonDefaultTitle>
        {title}
      </ButtonDefaultTitle>
    </ButtonDefaultWrapper>
  )
}