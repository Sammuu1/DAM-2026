import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [animo, setAnimo] = useState(0);
  const [mensaje, setMensaje] = useState('');
  const [imagen, setImagen] = useState('');

  useEffect(() => {
    if (animo <= -5) {
      setMensaje('Ánimo muy bajo, necesitas descansar un poco');
      setImagen('https://cdn-icons-png.flaticon.com/512/742/742752.png');
    } else if (animo < 0) {
      setMensaje('Andas medio bajoneado, pero todavía se puede mejorar');
      setImagen('https://cdn-icons-png.flaticon.com/512/742/742751.png');
    } else if (animo === 0) {
      setMensaje('Tu ánimo está normal');
      setImagen('https://cdn-icons-png.flaticon.com/512/742/742774.png');
    } else if (animo <= 5) {
      setMensaje('Vas mejorando, buen ánimo');
      setImagen('https://cdn-icons-png.flaticon.com/512/742/742940.png');
    } else {
      setMensaje('Estás con todo, ánimo al máximo');
      setImagen('https://cdn-icons-png.flaticon.com/512/742/742920.png');
    }
  }, [animo]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador de ánimo</Text>

      <View style={styles.card}>
        <Image source={{ uri: imagen }} style={styles.imagen} />

        <Text style={styles.numero}>{animo}</Text>

        <Text style={styles.mensaje}>{mensaje}</Text>
      </View>

      <View style={styles.botones}>
        <TouchableOpacity style={styles.botonSubir} onPress={() => setAnimo(animo + 1)}>
          <Text style={styles.textoBoton}>Subir ánimo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonBajar} onPress={() => setAnimo(animo - 1)}>
          <Text style={styles.textoBoton}>Bajar ánimo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ecef',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25
  },
  card: {
    backgroundColor: 'white',
    width: '90%',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 25
  },
  imagen: {
    width: 130,
    height: 130,
    marginBottom: 15
  },
  numero: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  mensaje: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10
  },
  botones: {
    flexDirection: 'row'
  },
  botonSubir: {
    backgroundColor: '#2b9348',
    padding: 13,
    borderRadius: 8,
    margin: 5
  },
  botonBajar: {
    backgroundColor: '#d00000',
    padding: 13,
    borderRadius: 8,
    margin: 5
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  }
});