import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image}source={require('./assets/imgs/24hrs.jpg')}/>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>¿Qué son las 24hrs de Lemans y como entenderlas?</Text>
        </View>
        <Text style={styles.textBody}>
          Las 24 Horas de Le Mans son una de las carreras de automovilismo más importantes y exigentes del mundo. Se celebran una vez al año en Francia y, como su nombre lo indica, duran 24 horas continuas, sin pausas. El objetivo no es simplemente ser el más rápido en una sola vuelta, sino recorrer la mayor distancia posible durante todo un día completo.
        </Text>
        <Text style={styles.textBody}>
          A diferencia de otras carreras, en Le Mans compiten equipos, no solo pilotos. Cada coche es manejado por varios pilotos que se van turnando para poder resistir el cansancio físico y mental. Durante la carrera, los equipos deben tomar decisiones estratégicas constantes: cuándo cambiar de piloto, cuándo entrar a pits, cómo cuidar el auto y cuándo atacar.
        </Text>
        <Text style={styles.textBody}>
          Una de las cosas que hace única a esta carrera es que la velocidad importa tanto como la resistencia. Los autos corren a altísimas velocidades, incluso de noche, pero al mismo tiempo deben ser lo suficientemente confiables para no fallar después de muchas horas de uso extremo. Por eso, Le Mans es considerada una prueba tanto para los pilotos como para la ingeniería de los autos.
        </Text>
        <Text style={styles.textBody}>
          Las 24 Horas de Le Mans no son solo una carrera, sino una experiencia completa. Verla es presenciar cómo la concentración, la tecnología y la resistencia se ponen al límite. Es una competencia donde no siempre gana el más rápido, sino el que mejor logra mantenerse fuerte hasta el final.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000b5b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: "100%",
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 20,
    alignItems: "center",
  },
  textBody: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "center",
    color: '#fff',
    margin: 20,
    marginTop: 10,
    textAlign: "justify",
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "center",
    color: '#fff',
  },
  imageContainer: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  image: {
    width: "90%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    borderRadius: 15,
  },
});
