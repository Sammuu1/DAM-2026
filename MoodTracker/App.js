import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mood Tracker</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('./assets/imgs/bolefeliz.jpg')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    paddingTop: 70,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  }
});
