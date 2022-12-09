import { View, Text } from 'react-native'
import React from 'react'
import { ItemShoppingListActions, ItemShoppingListBody, ItemShoppingListBodyInfo, ItemShoppingListBodyInfoDetails, ItemShoppingListButtonAction, ItemShoppingListDatetime, ItemShoppingListTitle, ItemShoppingListTotalItems, ItemShoppingListWrapper, ItemShoppingPrice } from './ItemShoppingListStyles';

import SvgIconEdit from '../../../../assets/images/edit.svg';
import SvgIconDelete from '../../../../assets/images/delete.svg';
import SvgIconShopping from '../../../../assets/images/shopping.svg';
import SvgIconView from '../../../../assets/images/view.svg';

export interface ItemShoppingListProps{
    status:"completed"|"pending"|"saved";
    title:string;
    totalPrice:number;
    stipulatedPrice:number;
}

export interface ItemShoppingDataProps{
  data:ItemShoppingListProps
}

function getCurrency(value:number,locale:string = 'pt-BR', currency:string = "BRL" ){
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}
export default function ItemShoppingList({data}:ItemShoppingDataProps) {

  return (
    <ItemShoppingListWrapper style={{ borderStyle: 'dashed',}} status={data.status}>
      <ItemShoppingListBody>

        <ItemShoppingListBodyInfo>
          <ItemShoppingListTitle>{data.title}</ItemShoppingListTitle>
          <ItemShoppingListDatetime>17/11/2022 10:07</ItemShoppingListDatetime>
          
          <ItemShoppingListBodyInfoDetails>
            <ItemShoppingPrice status={data.status}>{ getCurrency(data.stipulatedPrice,"pt-BR","BRL") }</ItemShoppingPrice>
            { data.status === 'completed' && <ItemShoppingListTotalItems>20000 itens</ItemShoppingListTotalItems>}
          </ItemShoppingListBodyInfoDetails>

        </ItemShoppingListBodyInfo>

        <ItemShoppingListActions> 

            { data.status === 'completed' && 
              <ItemShoppingListButtonAction>
                  <SvgIconView/>
              </ItemShoppingListButtonAction>
            }

            { data.status === 'pending'&& 
              <ItemShoppingListButtonAction>
                 <SvgIconEdit/>
              </ItemShoppingListButtonAction>
            }

            { data.status === 'saved' && 
              <ItemShoppingListButtonAction>
                  <SvgIconShopping />
              </ItemShoppingListButtonAction>
            } 

            <ItemShoppingListButtonAction>
                <SvgIconDelete/>
            </ItemShoppingListButtonAction>

        </ItemShoppingListActions>

      </ItemShoppingListBody>
    </ItemShoppingListWrapper>
  )
}