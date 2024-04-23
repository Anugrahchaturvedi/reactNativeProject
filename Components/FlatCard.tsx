import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text style={styles.boxText}> Voilet</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text style={styles.boxText}> Red</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.boxText}> Yellow</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.boxText}> Yellow</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 28
  },
  card: {
    flex: 1,
    justifyContent: 'center', // justify content move elements inside the container
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 8
  },
  card1: {
    backgroundColor: '#793690'
  },
  card2: {
    backgroundColor: '#ff0000'
  },
  card3: {
    backgroundColor: '#d9ff00'
  },
  boxText:{
    color: '#ffffff'
  }

})