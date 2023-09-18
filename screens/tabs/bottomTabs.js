import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../home/homeScreen';
import SettingScreen from '../settingScreen';
import { COLOR } from '../../outils/constantes';
import MessageScreen from '../message/messageScreen';

const Tab = createMaterialBottomTabNavigator();


function BottomTabs()  {
    return (
      <Tab.Navigator
      initialRouteName="Home"
      activeColor={COLOR.orange}
      barStyle={{ backgroundColor: 'white' }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="message"
        component={MessageScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Parametre',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

export default BottomTabs