import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function RegistrationBtn({onPress, title, containerStyle = {}}) {
  return (
    <TouchableOpacity
      style={{...styles.orderBtnWraper, containerStyle}}
      onPress={onPress}>
      <LinearGradient colors={['#FF9472', '#F2709C']} style={styles.orderBtn}>
        <Text style={styles.orderText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  orderBtnWraper: {
    overflow: 'hidden',
    width: 142,
    height: 42,
  },
  orderBtn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0078',
  },
  orderText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
