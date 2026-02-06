import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Instagram</Text>
      </View>
      <View style={styles.imageContainer}>
        <Text style={styles.infoText}>Samuel Reséndiz</Text>
        <Image style={styles.image} source={require('./assets/imgs/mustang.jpg')}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
  },
  titleContainer: {
    alignItems: 'flex-start',
    justifyContent: "flex-start",
    fontWeight: 'bold',
    color: '#ffffffff',
    alignItems: "center",
    marginTop: 50,
  },
  titleText: {
    fontFamily: 'Arial',
    fontStyle: 'italic',
    fontWeight: 'bold',  
    color: '#ffffffff',
    fontSize: 28,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoText: {
    fontFamily: 'Arial',
    fontStyle: 'italic',
    fontWeight: 'bold',  
    color: '#ffffffff',
    fontSize: 16,
    textAlign: 'left',
  },

});
