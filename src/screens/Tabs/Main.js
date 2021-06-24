import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text} from 'react-native';
import Barcode from 'react-native-barcode-builder';
import {useSelector} from 'react-redux';
import backgraund from '../../assets/backgraund.png';
import blockBackgraound from '../../assets/blockBackgraound.png';
import Header from '../../components/Main/Header';
import {strings} from '../../Constants/localization';

export default function Main({navigation}) {
  const {balance} = useSelector((state) => state.balanceState);

  return (
    <ImageBackground
      imageStyle={{resizeMode: 'stretch'}}
      source={backgraund}
      style={styles.image}>
      <ScrollView contentContainerStyle={{width: '100%', alignItems: 'center'}}>
        <Header navigation={navigation} />

        <ImageBackground source={blockBackgraound} style={styles.block}>
          <Text style={styles.title}>{strings.MAIN.BALANCE}</Text>
          <Text style={styles.subTitle}>
            <Text style={styles.number}>{balance.Balance || 0} </Text>

            {strings.MAIN.BALL}
          </Text>
        </ImageBackground>
        <ImageBackground source={blockBackgraound} style={styles.block}>
          <Text style={styles.title}>{strings.MAIN.EXPENSE}</Text>
          <Text style={styles.subTitle}>
            <Text style={styles.number}>{balance.Days30 || 0} </Text>
            {strings.MAIN.BALL}
          </Text>
        </ImageBackground>
        <ImageBackground
          source={blockBackgraound}
          style={{...styles.block, height: 140}}>
          {balance.Code ? (
            <>
              <Barcode
                value={balance.Code}
                height={80}
                width={2}
                background="transparent"
                lineColor="black"
              />
              <Text>{balance.Code}</Text>
            </>
          ) : (
            <Barcode
              value="no code"
              height={80}
              width={2}
              background="transparent"
              lineColor="black"
            />
          )}
        </ImageBackground>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    paddingHorizontal: 25,
    paddingVertical: '10%',
    flex: 1,
  },
  block: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#665F92',
  },
  subTitle: {color: '#FF5B61', fontSize: 15, marginTop: 6},
  number: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
