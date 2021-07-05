import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default function Title({text}) {
  return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: widthPercentageToDP(6),
    color: '#FFFFFF',
    fontWeight: '600',
    marginVertical: 15,
    textAlign: 'center',
  },
});
