import { StyleSheet } from "react-native";
import { PADDING, TEXT_SIZE } from "../../outils/constantes";

const DoctorStyle= StyleSheet.create({
    doctor: {
        display: "flex",
        flexDirection: "row",
        padding: PADDING.horizontal,
        backgroundColor: "white",
        marginHorizontal: 15,
        marginBottom: 10,
        elevation: 5,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginRight: 30,
    },
    name: {
        fontSize: TEXT_SIZE.primary,
        fontWeight: "500",
        marginBottom: 15,
    },
    specialite: {
        fontSize: TEXT_SIZE.secondary,
        backgroundColor: '#55f',
        paddingHorizontal: 10 ,
        paddingVertical: 5,
        textAlign: "center",
        borderRadius: 10,
        color: 'white',
        fontWeight: "500",
    }
})
export default DoctorStyle;