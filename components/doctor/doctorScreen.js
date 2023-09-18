import { Image, Text, TouchableOpacity, View } from "react-native";
import DoctorStyle from "./doctorStyle";

const Doctor = ({doctor}) => {
    return(
        <TouchableOpacity style={DoctorStyle.doctor}>
             <Image style={DoctorStyle.image} source={require('../../assets/moi.jpeg')} />
             <View>
                <Text style={DoctorStyle.name}>{doctor.name}</Text>
                <Text style={DoctorStyle.specialite}>{doctor.specialite}</Text>
             </View>
        </TouchableOpacity>
    )
}
export default Doctor;