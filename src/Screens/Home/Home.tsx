import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonCircle from '../../global/components/ButtonCircle/ButtonCircle';
import ItemShoppingList, { ItemShoppingListProps } from '../../global/components/ItemShoppingList/ItemShoppingList';

function Home() {
  const navigation = useNavigation();

  const data :ItemShoppingListProps[]=[
    {
      status:"completed",
      title:'lista de ontem',
      totalPrice:600,
      stipulatedPrice:600
    },
    {
      status:"pending",
      title:'lista de hoje',
      totalPrice:0,
      stipulatedPrice:600
    },
    {
      status:"saved",
      title:'lista de amanhã',
      totalPrice:0,
      stipulatedPrice:600
    },
    {
      status:"completed",
      title:'lista do natal',
      totalPrice:600,
      stipulatedPrice:600
    },{
      status:"completed",
      title:'lista de ontem',
      totalPrice:600,
      stipulatedPrice:600
    },
    {
      status:"pending",
      title:'lista de hoje',
      totalPrice:0,
      stipulatedPrice:600
    },
    {
      status:"saved",
      title:'lista de amanhã',
      totalPrice:0,
      stipulatedPrice:600
    },
    {
      status:"completed",
      title:'lista do natal',
      totalPrice:600,
      stipulatedPrice:600
    },{
      status:"completed",
      title:'lista de ontem',
      totalPrice:600,
      stipulatedPrice:600
    },
    // {
    //   status:"pending",
    //   title:'lista de hoje',
    //   totalPrice:0,
    //   stipulatedPrice:600
    // },
    // {
    //   status:"saved",
    //   title:'lista de amanhã',
    //   totalPrice:0,
    //   stipulatedPrice:600
    // },
    // {
    //   status:"completed",
    //   title:'lista do natal',
    //   totalPrice:600,
    //   stipulatedPrice:600
    // }
  ]
  return (

      <View style ={{flex:1}}>
        <FlatList data={data} style={{flex:1}} renderItem={({item})=>( <ItemShoppingList data={item}/>)} />  
        <ButtonCircle onPress={()=> navigation.navigate('CreateShopList')}/>
      </View>
    
  )
}

export default Home;