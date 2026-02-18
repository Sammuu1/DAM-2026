import React, { useState } from 'react'; // Paso 1: Importar useState
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IgProfile() {
  const [followers, setFollowers] = useState(385);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowPress = () => {
    if (isFollowing) {
      setFollowers(followers > 0 ? followers - 1 : 0);
    } else {
      setFollowers(followers + 1);
    }
    setIsFollowing(!isFollowing); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>jsamm_1</Text>
        <Ionicons name="ellipsis-horizontal" size={24} color="black" style={styles.headerIcon} />
      </View>

      <View style={styles.userRow}>
        <Image source={require('./assets/imgs/samu.jpeg')} style={styles.pic}/>
        <View>
          <Text style={styles.username}>Samuel Reséndiz</Text>
          <Text style={styles.bio}>Software Developer</Text>
          <Text style={styles.bio}>React Native Student</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBlock}>
          <Text style={styles.statNumber}>6</Text>
          <Text style={styles.statLabel}>Publicaciones</Text>
        </View>
        <View style={styles.statBlock}>
          <Text style={styles.statNumber}>{followers}</Text>
          <Text style={styles.statLabel}>Seguidores</Text>
        </View>
        <View style={styles.statBlock}>
          <Text style={styles.statNumber}>343</Text>
          <Text style={styles.statLabel}>Seguidos</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={[styles.button, isFollowing ? styles.buttonUnfollow : styles.buttonFollow]} 
        onPress={handleFollowPress}
      >
        <Text style={[styles.buttonText, isFollowing ? styles.textBlack : styles.textWhite]}>
          {isFollowing ? 'Unfollow' : 'Follow'}
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcon: {
    position: 'absolute',
    right: 16,
    top: 50,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 15,
  },
  pic: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    color: 'gray',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#dbdbdb',
  },
  statBlock: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: 'gray',
  },
  button: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonFollow: {
    backgroundColor: '#0095f6',
  },
  buttonUnfollow: {
    backgroundColor: '#efefef',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  textWhite: { color: 'white' },
  textBlack: { color: 'black' },
});