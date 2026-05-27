import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const tiempo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(tiempo);
  }, []);

  const sacarHora = (zona) => {
    return hora.toLocaleTimeString('es-MX', {
      timeZone: zona,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Relojes del mundo</Text>

      <View style={styles.reloj}>
        <Text style={styles.pais}>México</Text>
        <Text style={styles.hora}>{sacarHora('America/Mexico_City')}</Text>
      </View>

      <View style={styles.reloj}>
        <Text style={styles.pais}>Estados Unidos</Text>
        <Text style={styles.hora}>{sacarHora('America/New_York')}</Text>
      </View>

      <View style={styles.reloj}>
        <Text style={styles.pais}>España</Text>
        <Text style={styles.hora}>{sacarHora('Europe/Madrid')}</Text>
      </View>

      <View style={styles.reloj}>
        <Text style={styles.pais}>Japón</Text>
        <Text style={styles.hora}>{sacarHora('Asia/Tokyo')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212529',
    padding: 25,
    justifyContent: 'center'
  },
  titulo: {
    color: 'white',
    fontSize: 31,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },
  reloj: {
    backgroundColor: '#343a40',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15
  },
  pais: {
    color: '#adb5bd',
    fontSize: 20,
    marginBottom: 5
  },
  hora: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold'
  }
});