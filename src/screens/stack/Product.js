import React, {useEffect, useMemo, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {showMessage} from 'react-native-flash-message';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import Background from '../../assets/Basket/Background.png';
import Photo from '../../components/Product/Photo';
import {strings} from '../../Constants/localization';
import {host} from '../../Constants/network';
import {handleError, makeGetRequest} from '../../dataManagment/srvConn';
import {addProductThunk} from '../../redux/thunks/product-tkunks';
import {isEmpty, toCurrency} from '../../utils/helpers';

export default function Product({navigation, route}) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);

  const [color, pickColor] = useState('');
  const [size, pickSize] = useState('');

  const [canPay, setCanPay] = useState(false);
  const [item, setItem] = useState({});

  const [pickedPhoto, setPickedPhoto] = useState('');

  useEffect(() => {
    makeGetRequest(`balanceproducts/${route.params.Код}`)
      .then((res) => setProduct(res))
      .catch(handleError);
  }, []);

  useEffect(() => {
    let clear = true;
    if (color && size) {
      const search = product.Характеристики.find(
        (el) => el.Цвет === color && el.Размер === size,
      );
      if (search) {
        const params = `price?idproduct=${route.params.Код}&uidcharactristic=${search.УИДХарактеристика}`;

        makeGetRequest(params)
          .then((res) => {
            if (!isEmpty(res)) {
              setItem({...res, Количество: search.Количество});
              setCanPay(true);
              clear = false;
            }
          })
          .catch(handleError);
      }

      if (clear) {
        setItem({});
        setCanPay(false);
      }
    }
  }, [color, size]);

  useEffect(() => {
    if (color) {
      const search = product.Характеристики.find((el) => el.Цвет == color);
      if (search) {
        setPickedPhoto(
          `${host}/photocharactristic?idproduct=${route.params.Код}&uidcolor=${search.УИДЦвет}`,
        );
      } else {
        setPickedPhoto('');
      }
    } else {
      setPickedPhoto('');
    }
  }, [color]);

  const sortedSizes = useMemo(() => {
    if (color) {
      const sortByColor = product.Характеристики.filter(
        (el) => el.Цвет == color,
      );
      const sizes = sortByColor.map((el) => el.Размер);
      return sizes.filter((el) => el).sort((a, b) => a - b);
    }
    const sizes = product.Характеристики
      ? product.Характеристики.map((el) => el.Размер)
      : [];
    const sorted = sizes.length ? [...new Set(sizes)] : [];
    return sorted.filter((el) => el).sort((a, b) => a - b);
  }, [product, color]);

  const sortedColors = useMemo(() => {
    if (size) {
      const sortBySize = product.Характеристики.filter(
        (el) => el.Размер == size,
      );
      const colors = sortBySize.map((el) => el.Цвет);
      return colors.filter((el) => el);
    }
    const colors = product.Характеристики
      ? product.Характеристики.map((el) => el.Цвет)
      : [];
    const sorted = colors.length ? [...new Set(colors)] : [];
    return sorted.filter((el) => el);
  }, [product, size]);

  function colorPick(col) {
    if (col == color) pickColor('');
    else pickColor(col);
  }

  function sizePick(siz) {
    if (siz == size) pickSize('');
    else pickSize(siz);
  }

  function toBucket() {
    if (canPay) {
      dispatch(addProductThunk(item));
      setShow(true);
    } else {
      showMessage({
        message: strings.PRODUCT.ERROR,
        type: 'danger',
        position: 'center',
      });
    }
  }

  return (
    <>
      <AwesomeAlert
        show={show}
        title={strings.PRODUCT.SUCCES}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText={strings.PRODUCT.BACK}
        cancelButtonColor="red"
        confirmText={strings.PRODUCT.NAVIGATE}
        confirmButtonColor="green"
        onConfirmPressed={() => {
          setShow(false);
          navigation.navigate('List');
        }}
        onCancelPressed={() => setShow(false)}
        onDismiss={() => setShow(false)}
      />
      <ImageBackground
        style={{width: '100%'}}
        imageStyle={{resizeMode: 'cover'}}
        source={Background}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.imgBlock}>
            <MaterialCommunityIcons
              onPress={() => navigation.goBack()}
              style={styles.back}
              name="arrow-left"
              size={30}
              color="#212224"
            />
            <Photo
              id={route.params.Код}
              number={product.количествофото}
              picked={pickedPhoto}
              setPicked={setPickedPhoto}
            />
          </View>

          <View style={styles.wraper}>
            <Text style={styles.title}>{product.Номенклатура}</Text>

            {item.Скидка || product.Скидка ? (
              <>
                <Text style={styles.blockName}>{strings.COSTWITHSALE}</Text>
                <View style={styles.pickBlock}>
                  <Text style={{...styles.subtitle, color: 'red'}}>
                    {item.ЦенаСоСкидкой
                      ? toCurrency(item.ЦенаСоСкидкой)
                      : product.ЦенаСоСкидкой
                      ? toCurrency(product.ЦенаСоСкидкой)
                      : '0'}{' '}
                    {strings.SUMM}
                  </Text>
                </View>
              </>
            ) : null}

            <Text style={styles.blockName}>{strings.COST}</Text>
            <View style={styles.pickBlock}>
              <Text style={styles.subtitle}>
                {item.Цена
                  ? toCurrency(item.Цена)
                  : product.Цена
                  ? toCurrency(product.Цена)
                  : '0'}{' '}
                {strings.SUMM}
              </Text>
            </View>

            {item.Скидка || product.Скидка ? (
              <>
                <Text style={styles.blockName}>{strings.SALE}</Text>
                <View style={styles.pickBlock}>
                  <Text style={{...styles.subtitle, color: 'red'}}>
                    {item.Скидка
                      ? toCurrency(item.Скидка)
                      : product.Скидка
                      ? toCurrency(product.Скидка)
                      : '0'}
                    {' %'}
                  </Text>
                </View>
              </>
            ) : null}

            <Text style={styles.blockName}>{strings.COLOR}</Text>
            <View style={styles.pickBlock}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {sortedColors.map((el, i) =>
                  color == el ? (
                    <LinearGradient
                      style={styles.pickBtnActive}
                      key={i}
                      colors={['#FF9472', '#F2709C']}>
                      <TouchableOpacity onPress={() => colorPick(el)}>
                        <Text style={{color: '#fff'}}>{el}</Text>
                      </TouchableOpacity>
                    </LinearGradient>
                  ) : (
                    <TouchableOpacity
                      key={i}
                      onPress={() => colorPick(el)}
                      style={styles.pickBtn}>
                      <Text>{el}</Text>
                    </TouchableOpacity>
                  ),
                )}
              </ScrollView>
            </View>
            <Text style={styles.blockName}>{strings.SIZE}</Text>
            <View style={styles.pickBlock}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {sortedSizes.map((el, i) =>
                  size == el ? (
                    <LinearGradient
                      style={styles.pickBtnActive}
                      key={i}
                      colors={['#FF9472', '#F2709C']}>
                      <TouchableOpacity onPress={() => sizePick(el)}>
                        <Text style={{color: '#fff'}}>{el}</Text>
                      </TouchableOpacity>
                    </LinearGradient>
                  ) : (
                    <TouchableOpacity
                      key={i}
                      onPress={() => sizePick(el)}
                      style={styles.pickBtn}>
                      <Text>{el}</Text>
                    </TouchableOpacity>
                  ),
                )}
              </ScrollView>
            </View>

            <Text style={styles.blockName}>{strings.PRODUCT.DESCRIPTION}</Text>
            <ScrollView contentContainerStyle={styles.pickBlock}>
              <Text style={styles.description}>
                {product.Описание || strings.PRODUCT.NODESCRIPTION}
              </Text>
            </ScrollView>

            <TouchableOpacity style={styles.orderBtnWraper} onPress={toBucket}>
              <LinearGradient
                colors={['#FF9472', '#F2709C']}
                style={styles.orderBtn}>
                <Text style={styles.orderText}>{strings.PRODUCT.SUBMIT}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  imgBlock: {
    width: '100%',
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'transparent',
    position: 'relative',
  },
  back: {
    position: 'absolute',
    left: 25,
    top: 25,
    zIndex: 10,
  },
  wraper: {
    width: '100%',
    paddingHorizontal: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    color: '#212224',
    marginVertical: 20,
    fontWeight: '500',
  },
  blockName: {
    color: '#3C3854',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 16,
    marginLeft: 15,
  },
  pickBlock: {
    width: '100%',
    height: 100,
    borderRadius: 15,
    elevation: 1,
    paddingLeft: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  pickBtn: {
    borderWidth: 0.4,
    borderColor: '#9B9B9B',
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  pickBtnActive: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 4,
  },
  description: {
    color: '#807D8A',
    fontSize: 13,
    paddingRight: 20,
  },
  orderBtnWraper: {
    width: '100%',
    height: 56,
    marginVertical: 20,
  },
  orderBtn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0078',
    borderRadius: 50,
    elevation: 2,
  },
  orderText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
