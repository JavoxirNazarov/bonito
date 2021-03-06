import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import blockBackgraound from '../../assets/headerImg.png';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../../Constants/localization';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.gradientContainer}>
      <ImageBackground
        imageStyle={{resizeMode: 'stretch'}}
        source={blockBackgraound}
        style={styles.block}>
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <LinearGradient colors={['#F2709C', '#FF9472']} style={styles.btn}>
            <View>
              <View style={styles.blocK1} />
              <View style={styles.blocK2} />
              <View style={styles.blocK1} />
            </View>
          </LinearGradient>
        </TouchableWithoutFeedback>

        <Text style={styles.text}>{strings.CATALOG.HEADER}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    width: '100%',
    height: heightPercentageToDP(14),
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },
  block: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
  },
  btn: {
    width: 40,
    height: 40,
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
    fontSize: wp(5),
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
