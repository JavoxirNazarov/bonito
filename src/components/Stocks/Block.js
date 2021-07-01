import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StockFireIcon from '../../assets/StockFireIcon';
import {strings} from '../../Constants/localization';

export default function Block({index, promo, navigation}) {
  function giveColor() {
    if (index % 2 == 0) return ['#67E196', '#06AFAA'];
    return ['#FF6188', '#FFB199'];
  }

  return (
    <LinearGradient colors={giveColor()} style={styles.block}>
      <View style={styles.imgContainer}>
        <View style={styles.blockIcon1}>
          <StockFireIcon />
        </View>
        <View style={styles.blockIcon2}>
          <MaterialCommunityIcons
            name="information-variant"
            size={28}
            color="#374A59"
          />
        </View>

        <Image
          source={{uri: `data:image/png;base64,${promo.картинка}`}}
          resizeMode="stretch"
          style={styles.img}
        />
      </View>

      <View style={styles.blockText}>
        <Text style={styles.title}>{promo.Заголовок}</Text>
        <Text style={styles.subTitle}>{promo.текст}</Text>
        <View style={styles.wraper}>
          <View>
            {/* <Text style={styles.currentSum}>250 000 {strings.SUMM}</Text>
            <Text style={styles.prevSum}>300 000 {strings.SUMM}</Text> */}
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Product', {
                Код: promo.Номенклатуракод,
                name: promo.Номенклатура,
              })
            }
            style={styles.link}>
            <Text style={styles.linkText}>{strings.PROMOS.BUY}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  block: {
    width: '90%',
    height: 400,
    zIndex: 10,
    borderRadius: 14,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 3,
    marginVertical: 25,
    overflow: 'hidden',
  },
  imgContainer: {
    width: '100%',
    height: '50%',
    position: 'relative',
  },
  blockIcon1: {
    zIndex: 1,
    height: 29,
    width: 29,
    borderRadius: 50,
    backgroundColor: '#F8593B',
    position: 'absolute',
    right: 22,
    bottom: -14.5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
  },
  blockIcon2: {
    zIndex: 1,
    height: 29,
    width: 29,
    borderRadius: 50,
    backgroundColor: '#fff',
    position: 'absolute',
    right: 22,
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  blockText: {
    padding: 20,
    width: '100%',
    height: '50%',
    justifyContent: 'space-around',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#FFFFFF',
  },
  subTitle: {
    fontSize: 14.5,
    color: '#FFFFFF',
  },
  wraper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentSum: {
    fontSize: 26,
    color: '#FFFFFF',
  },
  prevSum: {
    fontSize: 18,
    color: '#FFFFFF',
    textDecorationLine: 'line-through',
  },
  link: {
    width: 106,
    height: 41,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    color: '#32C3A9',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
