import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import catalogItemBackground from '../../assets/catalogItemBackground.png';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import defaultPicture from '../../assets/default.png';
import {host, token} from '../../Constants/network';

export default function ProductList({fetchingProducts, products, navigation}) {
  if (fetchingProducts)
    return (
      <View style={styles.bigCol}>
        <ActivityIndicator size="large" color="blue" style={{marginTop: 50}} />
      </View>
    );

  const {width} = Dimensions.get('window');

  const ViewTypes = {
    FULL: 0,
    HALF_LEFT: 1,
    HALF_RIGHT: 2,
  };

  const dataProvider = new DataProvider((r1, r2) => {
    return r1 !== r2;
  });
  const layoutProvider = new LayoutProvider(
    (index) => {
      if (index % 2 === 0) {
        return ViewTypes.HALF_RIGHT;
      } else if (index % 2 === 1) {
        return ViewTypes.HALF_LEFT;
      } else {
        return ViewTypes.FULL;
      }
    },
    (type, dim) => {
      switch (type) {
        case ViewTypes.HALF_LEFT:
          dim.width = (width - 110) / 2;
          dim.height = 210;
          break;
        case ViewTypes.HALF_RIGHT:
          dim.width = (width - 110) / 2;
          dim.height = 210;
          break;
        case ViewTypes.FULL:
          dim.width = width - 110;
          dim.height = 210;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
      }
    },
  );

  return (
    <View style={styles.bigCol}>
      {products.length ? (
        <RecyclerListView
          style={{width: '100%'}}
          layoutProvider={layoutProvider}
          dataProvider={dataProvider.cloneWithRows(products)}
          rowRenderer={(type, item) => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('Registration')}
                style={styles.productContainer}>
                <View style={styles.photo}>
                  <Image
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    // onError={({nativeEvent: {error}}) => console.log(error)}
                    source={{
                      uri: `${host}/preview/${item.Код}`,
                      cache: 'force-cache',
                      headers: {
                        Authorization: `Basic ${token}`,
                      },
                    }}
                  />
                </View>
                <Image
                  resizeMode="contain"
                  style={styles.defphoto}
                  source={defaultPicture}
                />
                <ImageBackground
                  source={catalogItemBackground}
                  resizeMode="cover"
                  imageStyle={{width: '100%', height: '100%'}}
                  style={{
                    ...styles.body,
                    backgroundColor: item.bgc,
                  }}>
                  <View style={styles.BoddyInner}>
                    <Text style={styles.name}>{item.Наименование}</Text>
                    <View style={styles.btn}>
                      <Text style={styles.btnText}>Смотреть</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noProducts}>Выберите категорию</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bigCol: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  noProducts: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 50,
  },
  productContainer: {
    width: '85%',
    height: 192,
    borderRadius: 20,
    backgroundColor: '#ccc',
    overflow: 'hidden',
    position: 'relative',
    elevation: 3,
  },
  photo: {
    width: '100%',
    height: '55%',
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defphoto: {
    width: '100%',
    height: '48%',
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    marginTop: 'auto',
    width: '100%',
    height: '55%',
    borderRadius: 20,
    resizeMode: 'stretch',
  },
  BoddyInner: {
    width: '100%',
    height: '100%',
    padding: 10,
    justifyContent: 'space-around',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  sub: {color: '#FFFFFF', fontSize: 10},
  btn: {
    width: 74,
    height: 19,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
  },
  btnText: {
    fontSize: 10,
    color: 'red',
  },
});
