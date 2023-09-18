import { FlatList, Text, View } from "react-native";
import React, { useEffect } from "react";
import { fakeConversation } from "../../outils/fakeChat";
import { Style } from "./style";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr' // import locale

dayjs.locale('fr') // use locale
dayjs.extend(relativeTime)


export default function DetailMessage({route, navigation}) {
  const {item} = route.params;

  useEffect(() => {
    navigation.setOptions({title: item.fullname})
  })

  return (
    <FlatList 
    data={fakeConversation}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => {
      return(
        <View style={[Style.container, item.idUser == 1 ? Style.containerMe : Style.containerElse]}>
          <Text>{item.message}</Text>
          <Text style={Style.date}>{dayjs(item.date).fromNow(true)}</Text>
        </View>
      )
    }}
  />
  )
}
