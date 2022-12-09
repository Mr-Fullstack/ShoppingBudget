import { View, Text,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import ButtonDefault from '../../global/components/ButtonDefault/ButtonDefault';

 function CreateShopList() {
  
  const navigation = useNavigation();

  return (
    <View style={{flex:1,paddingBottom:32}}>
      <View style={{flex:1}}>
        <Text>CreatingShopList</Text>
      </View>
      <ButtonDefault title='Adicionar items' onPress={()=> navigation.navigate('StartShop')}/>
    </View>
  )
}
export default CreateShopList;