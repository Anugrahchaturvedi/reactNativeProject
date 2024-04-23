import {StyleSheet, Text, View, Linking, Image, TouchableOpacity,
  Dimensions
} from 'react-native';
import React from 'react';

const { width: screenWidth } = Dimensions.get('window');
export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingTitle}>Blog Card</Text>
      <View style={[styles.elevatedCard, styles.card]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>what's new in React</Text>
        </View>
        <Image
          source={{uri: 'https://picsum.photos/300/300'}}
          style={styles.cardImage}
          
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            ldjglkjdlfkjlkfgjfdljfldsjlfdjsjdsllgdfslgkdfsjljdsl
            ldjglkjdlfkjlkfgjfdljfldsjlfdjsjdsllgdfslgkdfsjljdsl
            ldjglkjdlfkjlkfgjfdljfldsjlfdjsjdsllgdfslgkdfsjljdsl
            ldjglkjdlfkjlkfgjfdljfldsjlfdjsjdsllgdfslgkdfsjljdsl
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://www.youtube.com/')}>
            <Text style={styles.youtubeLink}> Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/anugrah-chaturvedi/')}>
            <Text style={styles.socialLink}> Follow  me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingTitle: {
    fontWeight: 'bold',
  },
  elevatedCard: {},
  card: {
    elevation: 4,
  },
  headerText: {},
  headerContainer: {},
  cardImage: {
    height: 200,
    width: screenWidth - 40,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  bodyContainer:{},
  footerContainer:{
    height: 100,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'

  },
  socialLink:{
    fontSize: 24,
    color: 'cyan',
    backgroundColor: 'white',
    padding: 7,
    borderRadius: 10
  },
  youtubeLink: {
    fontSize: 24,
    color: 'red',
    backgroundColor: 'white',
    padding: 7,
    borderRadius: 10
    
  }
});
