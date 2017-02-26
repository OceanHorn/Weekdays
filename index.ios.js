/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Moment from 'moment';
import DayItem from './app/dayItem';

export default class Weekdays extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.dayItems()}
      </View>
    );
  }

  dayItems() {
    let daysItems = [];

    for(let i=0; i < 7; i++) {
      let day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
          <DayItem day={day} key={i} daysUntil={i}/>
      );
    }
    return daysItems;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    color: 'green',
    fontSize: 18,
  }
});

AppRegistry.registerComponent('Weekdays', () => Weekdays);
