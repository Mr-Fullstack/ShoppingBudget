import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home/Home';
import CreateShopList from '../Screens/CreateShopList/CreateShopList';
import StartShop from '../Screens/StartShop/StartShop';

import Header from '../global/components/Header/Header';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ToastAndroid } from "react-native";


const Stack = createNativeStackNavigator();

const actionTest = ()=> {
  Alert.alert(
    "teste","testando função"
  )
}

type ArayPropsList = {
  [key:string]: string;
}

export const routerNames : ArayPropsList = {
  Home:"Listas",
  StartShop:"Realizando compra",
  CreateShopList:"Criando a lista"
}

const RootRoutes = () => {

  const navigation= useNavigation();

  const finalizarCompras = ()=> {
   
    ToastAndroid.showWithGravityAndOffset(
      'Compra Cancelada',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      0,
      0
    );
     navigation.navigate("Home")
  }

  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ animation:'slide_from_right',header:Header }} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
         name="CreateShopList" 
         component={CreateShopList} 
         options={{ 
          header:(props)=> <Header {...props} action={actionTest} actionTitle="Salvar" /> 
        }} />

        <Stack.Screen 
        name="StartShop" 
        component={StartShop}
        options={{ 
          header:(props)=> <Header {...props} action={finalizarCompras} noBack actionTitle="Cancelar" /> 
        }}  />
        
    </Stack.Navigator>
  )
}

export default RootRoutes;
