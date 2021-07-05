import React from 'react';
import {
  ImageBackground,
  ScrollView,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import Barcode from 'react-native-barcode-builder';
import {widthPercentageToDP} from 'react-native-responsive-screen';
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
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
        <ImageBackground source={blockBackgraound} style={styles.block}>
          {balance.Code ? (
            <>
              <Barcode
                value={balance.Code}
                height={70}
                width={2}
                background="transparent"
                lineColor="black"
              />
              <Text>{balance.Code}</Text>
            </>
          ) : (
            <Barcode
              value="no code"
              height={70}
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
    flex: 1,
  },
  scrollContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 90,
  },
  block: {
    width: '100%',
    paddingVertical: widthPercentageToDP(4),
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  title: {
    fontSize: widthPercentageToDP(4),
    fontWeight: 'bold',
    color: '#665F92',
  },
  subTitle: {color: '#FF5B61', fontSize: widthPercentageToDP(3), marginTop: 6},
  number: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
