import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren, ReactNode } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import ButtonTag from '../ButtonTag/ButtonTag';
import { HeaderTitle, HeaderWrapper } from './HeaderStyles';
import { routerNames } from '../../../routes/RootRoutes';

interface HeaderProps extends NativeStackHeaderProps{
    action?: ()=> void;
    actionTitle?:string;
    noBack?:boolean;
}

export default function Header( { navigation, route, action, back, noBack, actionTitle }:HeaderProps  ) {
   
    return (
        <HeaderWrapper>  
            {!back && <ButtonTag/> }
            {!noBack && !back || noBack && <ButtonTag/> }
            {!noBack && back &&  <ButtonTag title="Voltar" onPress={navigation.goBack}/> }
            <HeaderTitle> {routerNames[route.name]} </HeaderTitle>
            {action && actionTitle && <ButtonTag title={actionTitle} onPress={action}/>}
            {!action && !actionTitle &&  <ButtonTag />}
        </HeaderWrapper>
    )

}