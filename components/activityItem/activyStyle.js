import { StyleSheet } from "react-native";
import { PADDING, TEXT_SIZE } from "../../outils/constantes";

const ActivityStyle = StyleSheet.create({
    scrollableListItem: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white',
        marginRight: 15,
        elevation: 5,
    },
    image: {
        width: 50,
        height: 50,
        borderColor:'#aaa',
        borderWidth: 1,
        marginBottom: 5,
     },
    mainText: {
        fontSize: TEXT_SIZE.primary,
        fontWeight: "500",
    },
    subText: {
        fontSize: TEXT_SIZE.secondary,
        marginTop: 5,
    },
})
export default ActivityStyle;