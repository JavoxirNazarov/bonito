import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function Input({placeholder = ''}) {
  return (
    <TextInput
      style={styles.container}
      placeholder={placeholder}
      placeholderTextColor="#9B9B9B"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 64,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingLeft: 20,
    justifyContent: 'center',
    fontSize: 14,
  },
});
