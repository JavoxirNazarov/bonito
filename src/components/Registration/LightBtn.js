import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function LightBtn({title, onPress, containerStyle, loading}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={{...styles.btn, ...containerStyle}}>
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 42,
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 59,
    marginBottom: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
  },
  text: {
    color: '#32C3A9',
    fontSize: wp('3%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
