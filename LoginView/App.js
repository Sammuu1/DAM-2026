import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.LoginText}>
        <Text style={styles.lText}>Iniciar Sesión</Text>
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.MailInput}
          placeholder="Correo electrónico"
          placeholderTextColor="#999"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.PasswordInput}
          placeholder="Contraseña"
          placeholderTextColor="#999"
        />
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  LoginText: {
    flexDirection: 'row',
    alignItems: "flex-start",
    marginTop: 100,
  },
  lText:{
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
  InputContainer: {
    marginTop: 40,
    width: "80%",
  },
  MailInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  PasswordInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },

});
