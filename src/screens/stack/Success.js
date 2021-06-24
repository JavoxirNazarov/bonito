import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import successBackground from '../../assets/successBackground.png';

export default function Success({navigation}) {
  return (
    <ImageBackground source={successBackground} style={styles.container}>
      <TouchableOpacity
        style={styles.orderBtnWraper}
        onPress={() => navigation.navigate('Catalog')}>
        <LinearGradient colors={['#FF9472', '#F2709C']} style={styles.orderBtn}>
          <Text style={styles.orderText}>Продолжить покупку</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  orderBtnWraper: {
    width: '90%',
    height: 56,
    marginTop: 'auto',
    marginBottom: 30,
  },
  orderBtn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0078',
    borderRadius: 50,
  },
  orderText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
