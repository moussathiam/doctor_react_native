import { Button, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import HomeStyle from './homeStyle';
import { FakeData, FakeDotors, FakeSymptomes } from '../../outils/constantes';
import ActivityItem from '../../components/activityItem/activityItemScreen';
import SymptomeScreen from '../../components/symptome/symptomeScreen';
import Doctor from '../../components/doctor/doctorScreen';
function HomeScreen({navigation}) {
  return (
      <ScrollView>

        <View style={HomeStyle.header}>
          <Text style={HomeStyle.userName}>Moussa thiam</Text>
            <Image style={HomeStyle.userImg} source={require('../../assets/images.jpg')} />
        </View>

        <FlatList 
          style={HomeStyle.scrollableList}
          data={FakeData}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return(
             <ActivityItem item={item} />
            )
          }}
        />

        <View>
          <Text style={HomeStyle.symptomeTitle}>Quel symptome avez vous ?</Text>
        </View> 
         
        <FlatList 
          style={HomeStyle.scrollableList}
          data={FakeSymptomes}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return(
             <SymptomeScreen item={item} />
            )
          }}
        />

        <View style={HomeStyle.mesDoctors}>
          <Text style={HomeStyle.title}>Mes Docteurs</Text>
          <TouchableOpacity>
            <Text style={HomeStyle.cliquable}>Afficher tout</Text>
          </TouchableOpacity>
        </View>     
        
        <View>
          {FakeDotors.map((doctor) =>{
            return(
              <Doctor doctor={doctor} key={doctor.id}/>
            )
          })}
        </View>

      </ScrollView>

  );
}

export default HomeScreen



{/* <Button
  title='Go home 2'
  onPress={() => navigation.navigate('Home')}
/>
<Button
  title='Go detail'
  onPress={() => navigation.navigate('Detail')}
/> */}