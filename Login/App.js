import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [cargando, setCargando] = useState(false);

  const login = () => {
    if (email === '' || password === '') {
      setMensaje('No puedes dejar campos vacíos');
      return;
    }

    if (!email.includes('@')) {
      setMensaje('El email debe incluir @');
      return;
    }

    if (password.length < 6) {
      setMensaje('El password debe tener mínimo 6 caracteres');
      return;
    }

    setCargando(true);
    setMensaje('Validando datos...');

    setTimeout(() => {
      if (email === 'admin@test.com' && password === '123456') {
        setMensaje('Bienvenido!');
      } else {
        setMensaje('Credenciales incorrectas');
      }

      setCargando(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Iniciar sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.boton} onPress={login} disabled={cargando}>
        <Text style={styles.textoBoton}>
          {cargando ? 'Cargando...' : 'Login'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.mensaje}>{mensaje}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f3f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30
  },
  input: {
    backgroundColor: 'white',
    width: '90%',
    padding: 13,
    borderRadius: 8,
    marginBottom: 13,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ced4da'
  },
  boton: {
    backgroundColor: '#1c7ed6',
    width: '90%',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5
  },
  textoBoton: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
  mensaje: {
    marginTop: 20,
    fontSize: 17,
    textAlign: 'center'
  }
});