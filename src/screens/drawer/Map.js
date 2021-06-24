import React from 'react';
import {View, StyleSheet, ImageBackground, FlatList} from 'react-native';
import Header from '../../components/Header';
import Background from '../../assets/Basket/Background.png';
import MapBlock from '../../components/Map/MapBlock';
import {mapImages} from '../../assets/Map';

export default function Map({navigation}) {
  return (
    <ImageBackground
      imageStyle={{resizeMode: 'cover'}}
      style={styles.container}
      source={Background}>
      <Header title="Карта" navigation={navigation} />
      <View style={styles.innerContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{width: '100%', alignItems: 'center'}}
          style={{width: '100%'}}
          data={mapImages}
          renderItem={({item}) => <MapBlock place={item} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingTop: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
