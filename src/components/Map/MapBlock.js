import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {strings} from '../../Constants/localization';

export default function MapBlock({place}) {
  return (
    <View style={styles.block}>
      <View style={styles.img}>
        <Image
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
          source={place.image}
        />
      </View>
      <View style={styles.blockText}>
        <Text style={styles.title}>{place.name()}</Text>

        <LinearGradient colors={['#FF9472', '#F2709C']} style={styles.orderBtn}>
          <TouchableOpacity
            style={styles.orderBtnWraper}
            onPress={() => Linking.openURL(place.location)}>
            <Text style={styles.orderText}>{strings.MAPS.LOCATION}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    width: '90%',
    height: 160,
    marginBottom: 13,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 3,
  },
  img: {
    width: '35%',
    height: '100%',
    overflow: 'hidden',
  },
  blockText: {
    flex: 1,
    marginHorizontal: 11,
    marginVertical: 8,
  },
  title: {
    color: '#6E798C',
    fontSize: widthPercentageToDP(3.9),
    marginBottom: 6,
    lineHeight: 22,
  },
  orderBtn: {
    paddingVertical: 2,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0078',
    borderRadius: 50,
    marginTop: 'auto',
  },
  orderText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
  },
});
