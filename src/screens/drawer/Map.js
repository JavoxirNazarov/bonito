import React from 'react';
import {View, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import Header from '../../components/List/Header';
import Background from '../../assets/Basket/Background.png';
import MapBlock from '../../components/Map/MapBlock';
import {mapImages} from '../../assets/Map';
import {} from 'react-native';

export default function Map() {
  return (
    <ImageBackground
      imageStyle={{resizeMode: 'cover'}}
      style={styles.container}
      source={Background}>
      <View style={styles.innerContainer}>
        <ScrollView
          style={{width: '100%'}}
          contentContainerStyle={styles.innerContainer}>
          <Header text="Карта" />
          {mapImages.map((el, i) => (
            <MapBlock place={el} key={i} />
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
