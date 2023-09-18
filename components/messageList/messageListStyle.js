import { StyleSheet } from "react-native";
import { TEXT_SIZE } from "../../outils/constantes";

export const MessageStyle = StyleSheet.create({
    message : {
        display: "flex",
        flexDirection: "row",
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        marginHorizontal: 15,
        elevation: 5,
        flex: 1,
    },
    image : {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginRight: 15,
    },
    info : {
        flex: 1,
    },
    top : {
        flex: 1,
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    name : {
        fontSize: TEXT_SIZE.primary,
        fontWeight: "500",
    },
})