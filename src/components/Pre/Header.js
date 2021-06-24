import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import blockBackgraound from '../../assets/headerImg.png';

export default function Header() {
  return (
    <View style={styles.gradientContainer}>
      <ImageBackground
        imageStyle={{resizeMode: 'stretch'}}
        source={blockBackgraound}
        style={styles.block}>
        <Text style={styles.text}>Каталог товаров</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    width: '100%',
    height: 110,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },
  block: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    position: 'relative',
    justifyContent: 'center',
  },
  btn: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 20,
    position: 'absolute',
    left: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
  },
  blocK1: {
    marginVertical: 1.5,
    width: 20,
    height: 3,
    backgroundColor: '#FFFFFF',
  },
  blocK2: {
    marginVertical: 2,
    width: 16,
    height: 3,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
