import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState, useEffect} from 'react';

export default function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.container}>
    <View style={styles.MexClock}>
      <Text>Mexico Clock</Text>
      <Text>{time.toTimeString()}</Text>
    </View>
    <View style={styles.USClock}>
      <Text>USA Clock</Text>
      <Text>{time.toTimeString()}</Text>
    </View>
    <View style={styles.IsClock}>
      <Text>Iceland Clock</Text>
      <Text>{time.toTimeString()}</Text>
    </View>
    <View style={styles.SwitClock}>
      <Text>Switzerland Clock</Text>
      <Text>{time.toTimeString()}</Text>
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 1,
  },
  MexClock: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  USClock: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  IsClock: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SwitClock: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});