import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../Constants/localization';
import Logo from '../../assets/Logo';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default function Header({navigation}) {
  const {user} = useSelector((state) => state.userState);
  function openDrawer() {
    navigation.openDrawer();
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={openDrawer}>
          <LinearGradient
            onPress={openDrawer}
            colors={['#F2709C', '#FF9472']}
            style={styles.btn}>
            <View>
              <View style={styles.blocK1} />
              <View style={styles.blocK2} />
              <View style={styles.blocK1} />
            </View>
          </LinearGradient>
        </TouchableWithoutFeedback>

        <Logo />
      </View>
      <Text style={styles.text}>
        {strings.MAIN.HI} {user && user.Name}!
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: widthPercentageToDP(5),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn: {
    width: widthPercentageToDP(11),
    height: widthPercentageToDP(11),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
  },
  touch: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: widthPercentageToDP(5),
    marginVertical: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginRight: 'auto',
  },
});
