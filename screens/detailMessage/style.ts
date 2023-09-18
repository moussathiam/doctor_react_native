import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    container: {
        marginVertical: 5,
        marginHorizontal: 15,
        padding: 15,
        maxWidth: '85%',
        elevation:5,
        borderRadius: 5,
    },
    containerMe: {
        backgroundColor: '#aca',
        alignSelf: "flex-end"
    },
    containerElse: {
        backgroundColor: 'white',
        alignSelf: "flex-start"
    },
    date: {
        textAlign: "right",
        color: '#888'
    }
})