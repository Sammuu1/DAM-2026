import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>A cerca de "The Black Parade" y porque es mi album favorito</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('./assets/imgs/tbp.jpg')}/>
        </View>
        <Text style={styles.textBody}>
          The Black Parade es el segundo álbum de estudio de la banda estadounidense de rock alternativo My Chemical Romance, lanzado el 23 de octubre de 2006 por Reprise Records. 
        </Text>
        <Text style={styles.textBody}>
          Es un álbum conceptual que sigue la historia de un paciente con cáncer terminal conocido como "The Patient", quien reflexiona sobre su vida y su mortalidad.
        </Text>
        <Text style={styles.textBody}>
          The Black Parade no es solo un álbum que me gusta escuchar; es un disco con el que conecto porque pone en palabras emociones que muchas veces son difíciles de explicar. A través de una historia conceptual, el álbum habla del miedo, del desgaste, de la pérdida y de la muerte, pero también de la resistencia, de la identidad y de seguir adelante incluso cuando no todo tiene sentido.
        </Text>
        <Text style={styles.textBody}>
          Este álbum me acompaña en momentos de cambio y confusión. No intenta decir que todo estará bien ni maquilla el dolor; al contrario, lo acepta y lo ordena. Cada canción forma parte de un recorrido emocional que convierte el caos interno en algo entendible, y eso es algo con lo que me identifico profundamente. Escucharlo es como tener un espacio seguro para sentir sin tener que fingir que todo está bajo control.
        </Text>
        <Text style={styles.textBody}>
          Además, The Black Parade transforma emociones pesadas en impulso creativo. No me deja estancado, me invita a reflexionar, a expresarme y a seguir avanzando, aunque sea con dudas. Por eso no es solo música para mí, sino una referencia emocional que me ha acompañado en distintas etapas de mi vida y que sigue teniendo sentido cada vez que lo vuelvo a escuchar.
        </Text> 
      </ScrollView>
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
  titleContainer: {
    backgroundColor: "white",
    width: "100%",
    justifyContent: "flex-start",
    marginTop: 40,
  },

  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    padding: 10,
    textAlign: "center"
  },

  imageContainer: {
    width: "100%",
    marginTop: 10,
    padding: 15,
    alignItems: "center"
  },

  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },

  textBody: {
    fontSize: 16,
    color: "#000",
    padding: 10,
    textAlign: "justify",
    fontFamily: "tahoma",
  }
});
