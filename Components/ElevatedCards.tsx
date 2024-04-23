import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap Me</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation:10
      }
    }),
  },
  cardElevated: {
    backgroundColor: '#7a8994',
    borderColor: '#793690',
    borderWidth: 2
  },
  container: {
    padding: 8,
  },
});
