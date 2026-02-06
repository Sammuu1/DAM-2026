import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>
          ¡Hola mundo, es mi primer app en react native!
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image}
          source={require("./assets/imgs/tbp.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  titleContainer: {
    backgroundColor: "white",
    height: "auto",
    width: "100%",
    margintop: "20%",
  },

  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    padding: 15,
    fontFamily: "times-new-roman",
    textAlign: "center"
  },

  imageContainer: {
    height: "auto",
    width: "100%",
    margintop: "20%",
    padding: 15,
    alignItems: "center"
  },

  image: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  }
});
