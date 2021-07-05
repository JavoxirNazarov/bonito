import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import blockBackgraound from '../assets/headerImg.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function Header({navigation, title}) {
  return (
    <View style={styles.gradientContainer}>
      <ImageBackground
        resizeMode="stretch"
        source={blockBackgraound}
        style={styles.block}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <LinearGradient colors={['#FF9472', '#F2709C']} style={styles.btn}>
            <MaterialCommunityIcons name="arrow-left" size={25} color="#fff" />
          </LinearGradient>
        </TouchableWithoutFeedback>

        <Text style={styles.text}>{title}</Text>

        <View />
        <View />
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
    justifyContent: 'space-between',
  },
  touch: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginHorizontal: 25,
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
    fontSize: wp('5%'),
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
