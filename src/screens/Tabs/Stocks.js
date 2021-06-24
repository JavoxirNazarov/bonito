import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import Background from '../../assets/Basket/Background.png';
import Header from '../../components/Header';
import Block from '../../components/Stocks/Block';
import {strings} from '../../Constants/localization';

export default function Stocks({navigation}) {
  const {stocks} = useSelector((state) => state.stocksState);

  return (
    <ImageBackground
      imageStyle={{resizeMode: 'cover'}}
      style={styles.container}
      source={Background}>
      <ScrollView>
        <Header title={strings.PROMOS.HEADER} navigation={navigation} />

        <View style={styles.innerContainer}>
          {stocks.length ? (
            stocks.map((el, i) => (
              <Block promo={el} navigation={navigation} index={i} key={i} />
            ))
          ) : (
            <Text style={styles.noStocks}>{strings.PROMOS.NOPROMO}</Text>
          )}
        </View>
      </ScrollView>
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
    marginBottom: 70,
  },
  noStocks: {
    fontSize: 18,
    marginTop: 40,
  },
});
