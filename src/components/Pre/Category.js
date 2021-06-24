import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icons from '../../assets/Categories/index';

export default function Category({
  fetchingCategory,
  categories,
  fetchProducts,
}) {
  const [active, setActive] = useState(0);

  if (fetchingCategory)
    return (
      <View style={styles.smallCol}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );

  return (
    <View style={styles.smallCol}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={categories}
        renderItem={({item, index}) => {
          const Icon =
            item.Наименование && Icons[item.Наименование]
              ? Icons[item.Наименование]
              : Icons['default'];
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              style={index == active ? styles.itemActive : styles.item}
              onPress={() => {
                fetchProducts(item.Код);
                setActive(index);
              }}>
              <>
                <View
                  style={
                    index == active ? styles.itemIconActive : styles.itemIcon
                  }>
                  <Icon color={index == active ? '#fff' : '#FC5475'} />
                </View>
                <Text style={index == active ? styles.textActive : styles.text}>
                  {item.Наименование}
                </Text>
              </>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, i) => i.toString()}
      />

      <View style={styles.bgc} />
    </View>
  );
}

const styles = StyleSheet.create({
  smallCol: {
    width: 90,
    height: '100%',
    overflow: 'visible',
    position: 'relative',
    paddingTop: 5,
    justifyContent: 'center',
    zIndex: -1,
  },
  item: {
    width: '88%',
    minHeight: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    width: 42,
    backgroundColor: '#fff',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 3,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
  },
  itemActive: {
    backgroundColor: '#fff',
    width: '98%',
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 3,
  },
  itemIconActive: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    width: 42,
    backgroundColor: '#FA5475',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 3,
  },
  textActive: {
    fontSize: 12,
    textAlign: 'center',
    color: '#161616',
  },
  bgc: {
    position: 'absolute',
    width: '88%',
    height: '150%',
    backgroundColor: '#FC5475',
    top: -50,
    left: 0,
    zIndex: -1,
  },
});
