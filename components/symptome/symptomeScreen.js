import { Image, Text, TouchableOpacity } from 'react-native';
import SymptomeStyle from './symptomeStyle';

const SymptomeScreen = ({item}) => {
    return(
        <TouchableOpacity style={SymptomeStyle.scrollableListItem}>
            <Image style={SymptomeStyle.image} source={require('./../../assets/img1.jpg')} />
            <Text style={SymptomeStyle.titre}>{item.titre}</Text>
        </TouchableOpacity>
    )
}
export default SymptomeScreen;