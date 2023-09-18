import { StyleSheet } from "react-native";
import { PADDING, TEXT_SIZE } from "../../outils/constantes";

const HomeStyle = StyleSheet.create({
   scrollableList: {
      paddingHorizontal: PADDING.horizontal,
      paddingVertical: PADDING.vertical,
    },
    header: {
      borderColor: '#ddd',
      borderWidth: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: PADDING.horizontal,
      paddingVertical: PADDING.vertical,
      backgroundColor: 'white',
    },
    userImg: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderColor:'#aaa',
      borderWidth: 1,
    },
    userName: {
      fontSize: TEXT_SIZE.primary,
      fontWeight: "500",
    },
    symptomeTitle: {
      padding: PADDING.horizontal,
      paddingBottom: 0,
      fontSize: TEXT_SIZE.primary,
      fontWeight: "500",
    },
   
   mesDoctors: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 15,
   },
   title: {
      fontSize: TEXT_SIZE.primary,
      fontWeight: "500",
   },
   cliquable: {
      fontSize: TEXT_SIZE.primary,
      color: 'blue',
      fontWeight: "500",
   }
})
export default HomeStyle