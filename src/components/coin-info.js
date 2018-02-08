/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';




export default class CoinInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.coinpairvol}>
          <Text style={styles.coin}>{this.props.pair}</Text>
          <Text>Vol 6,331</Text>
        </View>
        <View style={styles.lastprice}>
          <Text style={styles.coin}>{this.props.pricebtc}</Text>
          <Text>$0.003</Text>

        </View>
        <View style={styles.hour24change}>
          <Text style={styles.coin}>24%</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  hour24change: {
    height: 40,
    width: 70,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  coin: {
    fontWeight: 'bold',
    fontSize: 16,
    color:'black'
  }
});
