import { Image, Text, TouchableOpacity, View } from 'react-native'
import { MessageStyle } from './messageListStyle';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr' // import locale

dayjs.locale('fr') // use locale
dayjs.extend(relativeTime)

function MessageListScreen({item, navigation}) {
    return (
      <TouchableOpacity 
        onPress={() => navigation.navigate('DetailMessage', {item})} 
        style={MessageStyle.message}
        >
         <Image style={MessageStyle.image} source={require('../../assets/moi.jpeg')} />
        <View style={MessageStyle.info}>
            <View style={MessageStyle.top}>
                <Text style={MessageStyle.name}>{item.fullname}</Text>
                <Text>{dayjs(item.date).fromNow(true)}</Text>
            </View>
            <Text style={MessageStyle.text}>{item.message}</Text>
        </View>
      </TouchableOpacity>
    )
}
export default MessageListScreen;