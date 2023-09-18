import { StyleSheet, View, Text } from 'react-native';
import Routes from './routes/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
