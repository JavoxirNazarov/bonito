import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function MapBlock({place, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.block}>
      <View style={styles.img}>
        <Image
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
          source={place.image}
        />
      </View>
      <View style={styles.blockText}>
        <Text style={styles.title}>{place.name()}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  block: {
    width: '100%',
    height: 160,
    marginBottom: 13,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 3,
  },
  img: {
    width: '45%',
    height: '100%',
    overflow: 'hidden',
  },
  blockText: {
    flex: 1,
    paddingHorizontal: 11,
    paddingTop: 10,
  },
  title: {
    color: '#6E798C',
    fontSize: 14,
  },
});
