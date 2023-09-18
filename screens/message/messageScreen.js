import { Button, FlatList, Text, View } from 'react-native';
import { FakeChats } from '../../outils/fakeChat';
import MessageListScreen from '../../components/messageList/messageListScreen';
function MessageScreen({navigation}) {
  return (
    <FlatList
      data={FakeChats}
      keyExtractor={item => item.id}
      style={{paddingTop: 10}}
      renderItem={({item}) =>{
        return(
          <MessageListScreen item={item} navigation={navigation} />
        )
      }}
    >
    </FlatList>
  );
}

export default MessageScreen