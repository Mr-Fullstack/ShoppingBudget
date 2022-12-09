import { View, Text, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { ButtonCircleWrapper } from './ButtonCircleStyles'

import SvgIconPlus from '../../../../assets/images/plus.svg';

export default function ButtonCircle(props:TouchableOpacityProps) {
  return (
    <ButtonCircleWrapper style={{elevation:3}} activeOpacity={0.9} {...props}>
      <SvgIconPlus/>
    </ButtonCircleWrapper>
  )
}