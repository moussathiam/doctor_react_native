import { Image, Text, TouchableOpacity } from 'react-native';
import ActivityStyle from './activyStyle';

const ActivityItem = ({item}) => {
    return(
        <TouchableOpacity style={ActivityStyle.scrollableListItem}>
            <Image style={ActivityStyle.image} source={require('./../../assets/img1.jpg')} />
            <Text style={ActivityStyle.mainText}>{item.mainText}</Text>
            <Text style={ActivityStyle.subText}>{item.subText}</Text>
        </TouchableOpacity>
    )
}
export default ActivityItem;