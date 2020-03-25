import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const QuicksandReg = props => (
  <Text style={styles.text}>{props.children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Quicksand-SemiBold',
  },
});
