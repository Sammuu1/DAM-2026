import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [clima, setClima] = useState('soleado');
  const [temperatura, setTemperatura] = useState(0);
  const [mensaje, setMensaje] = useState('');
  const [imagen, setImagen] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [tema, setTema] = useState({
    fondo: '#ffd166',
    texto: '#000',
    tarjeta: '#fff3c4'
  });

  useEffect(() => {
    if (clima === 'soleado') {
      setTemperatura(Math.floor(Math.random() * 9) + 28);
      setMensaje('Hace un día perfecto para salir');
      setImagen('https://cdn-icons-png.flaticon.com/512/869/869869.png');
      setTema({
        fondo: '#ffd166',
        texto: '#3a2c00',
        tarjeta: '#fff3c4'
      });
    }

    if (clima === 'nublado') {
      setTemperatura(Math.floor(Math.random() * 8) + 18);
      setMensaje('El día está tranquilo y gris');
      setImagen('https://cdn-icons-png.flaticon.com/512/414/414825.png');
      setTema({
        fondo: '#adb5bd',
        texto: '#222',
        tarjeta: '#dee2e6'
      });
    }

    if (clima === 'lluvioso') {
      setTemperatura(Math.floor(Math.random() * 7) + 14);
      setMensaje('No olvides tu paraguas');
      setImagen('https://cdn-icons-png.flaticon.com/512/3351/3351979.png');
      setTema({
        fondo: '#74c0fc',
        texto: '#06283d',
        tarjeta: '#d0ebff'
      });
    }

    if (clima === 'tormenta') {
      setTemperatura(Math.floor(Math.random() * 8) + 10);
      setMensaje('Mejor quédate en casa');
      setImagen('https://cdn-icons-png.flaticon.com/512/1146/1146860.png');
      setTema({
        fondo: '#343a40',
        texto: '#fff',
        tarjeta: '#495057'
      });
    }
  }, [clima]);

  return (
    <View style={[styles.container, { backgroundColor: tema.fondo }]}>
      <Text style={[styles.titulo, { color: tema.texto }]}>Simulador de clima</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu ciudad"
        value={ciudad}
        onChangeText={setCiudad}
      />

      <View style={[styles.card, { backgroundColor: tema.tarjeta }]}>
        <Text style={[styles.ciudad, { color: tema.texto }]}>
          {ciudad === '' ? 'Ciudad no seleccionada' : ciudad}
        </Text>

        <Image source={{ uri: imagen }} style={styles.imagen} />

        <Text style={[styles.clima, { color: tema.texto }]}>
          Clima: {clima}
        </Text>

        <Text style={[styles.temp, { color: tema.texto }]}>
          {temperatura}°C
        </Text>

        <Text style={[styles.mensaje, { color: tema.texto }]}>
          {mensaje}
        </Text>
      </View>

      <View style={styles.botones}>
        <TouchableOpacity style={styles.boton} onPress={() => setClima('soleado')}>
          <Text style={styles.textoBoton}>Soleado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => setClima('nublado')}>
          <Text style={styles.textoBoton}>Nublado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => setClima('lluvioso')}>
          <Text style={styles.textoBoton}>Lluvioso</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => setClima('tormenta')}>
          <Text style={styles.textoBoton}>Tormenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    backgroundColor: 'white',
    width: '90%',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16
  },
  card: {
    width: '90%',
    alignItems: 'center',
    padding: 25,
    borderRadius: 15,
    marginBottom: 20
  },
  ciudad: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  imagen: {
    width: 120,
    height: 120,
    marginVertical: 15
  },
  clima: {
    fontSize: 20,
    textTransform: 'capitalize'
  },
  temp: {
    fontSize: 42,
    fontWeight: 'bold',
    marginTop: 5
  },
  mensaje: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 10
  },
  botones: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  boton: {
    backgroundColor: '#222',
    padding: 12,
    borderRadius: 8,
    margin: 6,
    minWidth: 110,
    alignItems: 'center'
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold'
  }
});