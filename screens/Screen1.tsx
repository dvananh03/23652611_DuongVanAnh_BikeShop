import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function Screen01({ navigation }: { navigation: { navigate: (screen: string) => void } }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        A premium online store for{'\n'}sporter and their stylish choice
      </Text>

      <View style={styles.imageBox}>
        <Image
          source={require('../assets/bifour_-removebg-preview.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.brandName}>POWER BIKE{'\n'}SHOP</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen02')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    color: '#333',
    marginTop: 20,
  },
  imageBox: {
    backgroundColor: '#F7E5E4',
    borderRadius: 30,
    padding: 25,
    width: '90%',
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 220,
  },
  brandName: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: '#E94141',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});