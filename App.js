import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';

import quotes from './quotes';

const morpheus = require('./morpheus.jpg');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={morpheus} style={styles.image} />
        <Text style={styles.text}>This is your last chance. After this, there is no turning back. You take the blue pill — the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill — you stay in Wonderland, and I show you how deep the rabbit hole goes.</Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={[styles.button, styles.redPillButton]}>
            <Text style={styles.buttonLabel}>Red Pill</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.button, styles.bluePillButton]}>
            <Text style={styles.buttonLabel}>Blue Pill</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.quotesContainer}>
          <Text style={styles.quotesHeading}>Quotes</Text>
          {quotes.map((quote, idx) => (
            <Text key={idx} style={styles.quote}>{quote}</Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center'
  },
  image: {
    marginVertical: 5
  },
  text: {
    marginVertical: 5,
    fontSize: 18,
    lineHeight: 22,
    color: '#222222'
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    margin: 10,
    borderRadius: 5,
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  redPillButton: {
    backgroundColor: '#F44336'
  },
  bluePillButton: {
    backgroundColor: '#1E88E5'
  },
  buttonLabel: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  quotesContainer: {
    flex: 1,
    marginTop: 5
  },
  quotesHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#222222'
  },
  quote: {
    marginVertical: 5,
    fontSize: 16,
    lineHeight: 18,
    color: '#222222'
  }
});
