import React from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import blockBackgraound from '../../assets/headerImg.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {clearAll} from '../../redux/reducers/products-reducer';
import {strings} from '../../Constants/localization';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default function Header() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.gradientContainer}>
      <ImageBackground
        resizeMode="stretch"
        source={blockBackgraound}
        style={styles.block}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <LinearGradient colors={['#F2709C', '#FF9472']} style={styles.btn}>
            <MaterialCommunityIcons name="arrow-left" size={25} color="#fff" />
          </LinearGradient>
        </TouchableWithoutFeedback>

        <Text style={styles.text}>{strings.LIST.HEADER}</Text>

        <TouchableWithoutFeedback onPress={() => dispatch(clearAll())}>
          <LinearGradient colors={['#64D2FD', '#60CFF6']} style={styles.btn}>
            <MaterialCommunityIcons name="delete" size={25} color="#fff" />
          </LinearGradient>
        </TouchableWithoutFeedback>
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
    justifyContent: 'space-around',
  },
  btn: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
  },
  text: {
    fontSize: widthPercentageToDP('5%'),
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
