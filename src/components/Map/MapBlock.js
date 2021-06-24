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

        <TouchableOpacity
          style={styles.orderBtnWraper}
          onPress={() => Linking.openURL(place.location)}>
          <LinearGradient
            colors={['#FF9472', '#F2709C']}
            style={styles.orderBtn}>
            <Text style={styles.orderText}>{strings.MAPS.LOCATION}</Text>
          </LinearGradient>
        </TouchableOpacity>
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
    width: '30%',
    height: '100%',
    overflow: 'hidden',
  },
  blockText: {
    flex: 1,
    marginHorizontal: 11,
    marginVertical: 10,
  },
  title: {
    color: '#6E798C',
    fontSize: 15,
    marginBottom: 6,
    lineHeight: 22,
  },
  orderBtnWraper: {
    width: '60%',
    height: 30,
    marginTop: 'auto',
  },
  orderBtn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0078',
    borderRadius: 50,
  },
  orderText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
    fontWeight: '600',
  },
});
