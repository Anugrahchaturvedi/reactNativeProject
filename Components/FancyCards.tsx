import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Tending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{uri: 'https://picsum.photos/300/300'}}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Jaipur Title</Text>
          <Text style={styles.cardLabel}>Jaipur Subtitle jdifnvskfjvnkjsdgksfgjsldkfjlksdjflksjflksjdflkjsdflkjsdlfkjsldkfjlksdjflksdjflkjsjlkgjdslkgjlkdsjg</Text>
          <Text style={styles.cardDesc}>Jaipur Desc</Text>
          <Text style={styles.cardFotter}>Fotter Aise hi bna diya hai </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  card: {
    height: 350,
    width: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 40,
  },
  cardElevated: {
    backgroundColor: 'cyan',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 200,
    width: 200,
    marginBottom: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardLabel: {},
  cardDesc: {
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: 12
  },
  cardFotter: {},
  cardTitle: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 25
  },
});
