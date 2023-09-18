import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../screens/tabs/bottomTabs';
import DetailMessage from '../screens/detailMessage/detailMessage';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Hospital'
        // screenOptions={{headerShown: false}}
        >
        <Stack.Screen name="Hospital" component={BottomTabs} />
        <Stack.Screen name="DetailMessage" component={DetailMessage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes