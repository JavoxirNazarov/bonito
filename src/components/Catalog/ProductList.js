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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import StockIcon from '../../assets/Drawer/StockIcon';
import {strings} from '../../Constants/localization';
const {width} = Dimensions.get('window');

export default function ProductList({fetchingProducts, products, navigation}) {
  if (fetchingProducts)
    return (
      <View style={styles.bigCol}>
        <ActivityIndicator size="large" color="blue" style={{marginTop: 50}} />
      </View>
    );

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
      if (width < 350) {
        return ViewTypes.FULL;
      } else if (index % 2 === 0) {
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
          rowRenderer={(_, item) => (
            <View style={styles.flexWrap}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() =>
                  navigation.navigate('Product', {
                    ??????: item.??????,
                    name: item.????????????????????????,
                  })
                }
                style={styles.productContainer}>
                {item.?????????????? && (
                  <MaterialCommunityIcons
                    style={{position: 'absolute', top: 3, right: 3, zIndex: 10}}
                    name="fiber-new"
                    size={30}
                    color="red"
                  />
                )}

                {item.?????? && (
                  <View style={styles.blockIcon}>
                    <StockIcon />
                  </View>
                )}

                <View style={styles.photo}>
                  <Image
                    style={styles.imgSize}
                    // onError={({nativeEvent: {error}}) => console.log(error)}
                    source={{
                      uri: `${host}/preview/${item.??????}`,
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
                  imageStyle={styles.imgSize}
                  style={{
                    ...styles.body,
                    backgroundColor: item.bgc,
                  }}>
                  <View style={styles.BoddyInner}>
                    <Text style={styles.name}>{item.????????????????????????}</Text>
                    <View style={styles.btn}>
                      <Text style={styles.btnText}>{strings.CATALOG.SEE}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noProducts}>{strings.CATALOG.EMPTY}</Text>
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
  flexWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  imgSize: {
    width: '100%',
    height: '100%',
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
  btn: {
    alignSelf: 'flex-end',
    width: 74,
    height: 19,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  btnText: {
    fontSize: 10,
    color: 'red',
  },
  blockIcon: {
    height: 24,
    width: 24,
    borderRadius: 50,
    backgroundColor: '#F8593B',
    position: 'absolute',
    top: 3,
    left: 3,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
