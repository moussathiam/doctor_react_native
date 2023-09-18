import { StyleSheet } from "react-native";
import { PADDING, TEXT_SIZE } from "../../outils/constantes";

const SymptomeStyle = StyleSheet.create({
    scrollableListItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
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
        borderRadius: 25,
        marginRight: 10,
     },
    titre: {
        fontSize: TEXT_SIZE.primary,
        fontWeight: "500",
    },
})
export default SymptomeStyle;