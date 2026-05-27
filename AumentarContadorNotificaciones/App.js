import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [idNotificacion, setIdNotificacion] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotificaciones(prevNotificaciones => [
        ...prevNotificaciones,
        {
          id: idNotificacion,
          titulo: `Nueva Notificación #${idNotificacion}`,
          mensaje: "Este es el mensaje de la notificación.",
          leido: false
        }
      ]);
      setIdNotificacion(prevId => prevId + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [idNotificacion]);

  const marcarLeido = (id) => {
    setNotificaciones(prevNotificaciones =>
      prevNotificaciones.map(noti =>
        noti.id === id ? { ...noti, leido: true } : noti
      )
    );
  };

  const contadorNoLeidas = notificaciones.filter(noti => !noti.leido).length;

  const renderItem = ({ item }) => (
    <View style={styles.notificacion}>
      <TouchableOpacity onPress={() => marcarLeido(item.id)} disabled={item.leido}>
        <Ionicons 
          name={item.leido ? "checkbox" : "checkbox-outline"} 
          size={25} 
          color={item.leido ? "green" : "gray"} 
        />
      </TouchableOpacity>
      <View style={styles.infoNotificacion}>
        <Text style={styles.tituloNoti}>{item.titulo}</Text>
        <Text>{item.mensaje}</Text>
        <Text style={{ color: item.leido ? 'green' : 'gray', fontWeight: 'bold' }}>
          {item.leido ? 'Leído' : 'No leído'}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Examen Parcial 2</Text>
      </View>
      <FlatList
        data={notificaciones}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listaNotificaciones}
      />
      <View style={styles.NotiContainer}>
        <View style={styles.NotiText}>
          <Text style={styles.contadorTexto}>{contadorNoLeidas}</Text>
          <Ionicons name="notifications" size={24} color="black" />
        </View>
        <Text style={{fontWeight: 'bold'}}>Sin leer</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60, 
  },
  header: {
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listaNotificaciones: {
    paddingHorizontal: 20,
    paddingBottom: 100, 
    gap: 15,
  },
  notificacion: {
    borderColor: '#A9A9A9',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    backgroundColor: '#f9f9f9'
  },
  infoNotificacion: {
    flexDirection: 'column',
    flex: 1,
    gap: 2,
  },
  tituloNoti: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  NotiContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    padding: 15,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  NotiText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  contadorTexto: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});