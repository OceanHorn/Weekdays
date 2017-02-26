/**
 * Created by guoyufu on 2017/2/26.
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';



export default class DayItem extends Component {
  render() {
    return (
        <View>
          <Text style={this.style()}>
            {this.props.day}
          </Text>
        </View>
    );
  }

  style() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight(),
    }
  }

  color() {
    let opacity = 1 / this.props.daysUntil;
    if(this.props.daysUntil === 0) {
      opacity = 1;
    }
    opacity = opacity.toString();
    return 'rgba(0, 1, 1, '+ opacity +')';
  }

  fontWeight() {
    let weight = (7 - this.props.daysUntil) * 100;
    return weight.toString();
  }

  fontSize() {
    let fontSize = (60 - 6 * this.props.daysUntil);
    return fontSize;
  }
  lineHeight() {
    let lineHeight = (70 - 4 * this.props.daysUntil);
    return lineHeight;
  }
}