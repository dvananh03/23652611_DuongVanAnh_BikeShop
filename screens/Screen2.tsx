import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const BIKES = [
  {
    id: '1',
    name: 'Pinarello',
    price: 1800,
    discount: '15% OFF | 1350$',
    type: 'Roadbike',
    image: require('../assets/bifour_-removebg-preview.png'),
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
  },
  {
    id: '2',
    name: 'Pina Mountain',
    price: 1700,
    discount: '15% OFF | 1350$',
    type: 'Mountain',
    image: require('../assets/bione-removebg-preview.png'),
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
  },
  {
    id: '3',
    name: 'Pina Bike',
    price: 1500,
    discount: '10% OFF | 1350$',
    type: 'Roadbike',
    image: require('../assets/bithree_removebg-preview.png'),
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
  },
  {
    id: '4',
    name: 'Pinarello',
    price: 1900,
    discount: '20% OFF | 1500$',
    type: 'Mountain',
    image: require('../assets/bitwo-removebg-preview.png'),
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
  },
  {
    id: '5',
    name: 'Pinarello',
    price: 2700,
    discount: '15% OFF | 2300$',
    type: 'Roadbike',
    image: require('../assets/bithree_removebg-preview.png'),
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
  },
  {
    id: '6',
    name: 'Pinarello',
    price: 1350,
    discount: '15% OFF | 1150$',
    type: 'Mountain',
    image: require('../assets/bione-removebg-preview.png'),
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
  },
];

const CATEGORIES = ['All', 'Roadbike', 'Mountain'];

export default function Screen02({
  navigation,
}: {
  navigation: {
    navigate: (screen: 'Screen03', params: { item: (typeof BIKES)[number] }) => void;
  };
}) {
  const [selectedCat, setSelectedCat] = useState('All');
  const [likedList, setLikedList] = useState<Record<string, boolean>>({});

  const toggleHeart = (id: string) => {
    setLikedList((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredBikes =
    selectedCat === 'All'
      ? BIKES
      : BIKES.filter((item) => item.type === selectedCat);

  const renderBikeItem = ({ item }: { item: (typeof BIKES)[number] }) => {
    const isLiked = !!likedList[item.id];

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Screen03', { item })}
      >
        <TouchableOpacity
          style={styles.heartButton}
          onPress={() => toggleHeart(item.id)}
        >
          <Text style={[styles.heartIcon, isLiked && styles.heartActive]}>
            {isLiked ? '♥' : '♡'}
          </Text>
        </TouchableOpacity>

        <Image source={item.image} style={styles.cardImage} resizeMode="contain" />

        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardPrice}>
          <Text style={{ color: '#F7BA83' }}>$</Text>
          {item.price}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>The world's Best Bike</Text>

      {/* Tabs / Filters */}
      <View style={styles.filterRow}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.filterBtn, selectedCat === cat && styles.filterBtnActive]}
            onPress={() => setSelectedCat(cat)}
          >
            <Text
              style={[
                styles.filterText,
                selectedCat === cat && styles.filterTextActive,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Grid List */}
      <FlatList
        data={filteredBikes}
        renderItem={renderBikeItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E94141',
    marginVertical: 16,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -8,
    marginBottom: 20,
  },
filterBtn: {
  flex: 1,
  borderWidth: 1,
  
  borderColor: '#E8A0A0',
  borderRadius: 8,
  paddingVertical: 8,
  alignItems: 'center',
  justifyContent: 'space-between',
},
  filterBtnActive: {
    borderColor: '#E94141',
  },
  filterText: {
    color: '#999',
    fontWeight: '600',
  },
  filterTextActive: {
    color: '#E94141',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#FDF0EE',
    margin: 8,
    borderRadius: 12,
    alignItems: 'center',
    padding: 12,
    position: 'relative',
  },
  heartButton: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 1,
  },
  heartIcon: {
    fontSize: 20,
    color: '#888',
  },
  heartActive: {
    color: '#E94141',
  },
  cardImage: {
    width: 120,
    height: 100,
    marginVertical: 6,
  },
  cardTitle: {
    fontSize: 15,
    color: '#444',
    marginTop: 4,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 2,
  },
});