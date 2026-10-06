import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function Screen03({ route, navigation }) {
  // Lấy dữ liệu item truyền từ Screen02 qua navigation
  const item = route.params?.item || {
    name: 'Pina Mountain',
    price: 449,
    discount: '15% OFF | 350$',
    image: require('../assets/bione-removebg-preview.png'),
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
  };

  const [isLiked, setIsLiked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{item.name}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.discountText}>{item.discount || '15% OFF | 350$'}</Text>
          <Text style={styles.priceText}>{item.price}$</Text>
        </View>

        <Text style={styles.descriptionHeader}>Description</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>

        <View style={styles.footerRow}>
          <TouchableOpacity
            style={styles.heartButton}
            onPress={() => setIsLiked(!isLiked)}
          >
            <Text style={[styles.heartIcon, isLiked && styles.heartActive]}>
              {isLiked ? '♥' : '♡'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addToCartBtn}>
            <Text style={styles.addToCartText}>Add to card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1.2,
    backgroundColor: '#FDEAE8',
    margin: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '90%',
    height: '90%',
  },
  detailsContainer: {
    flex: 1.3,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 25,
  },
  productName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginVertical: 6,
  },
  discountText: {
    fontSize: 16,
    color: '#777',
  },
  priceText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  descriptionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginTop: 4,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 15,
  },
  heartButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  heartIcon: {
    fontSize: 26,
    color: '#555',
  },
  heartActive: {
    color: '#E94141',
  },
  addToCartBtn: {
    flex: 1,
    backgroundColor: '#E94141',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});