import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import Background from '../../assets/Basket/Background.png';
import Alert from '../../components/Alert';
import Block from '../../components/List/Block';
import Header from '../../components/List/Header';
import OrderModal from '../../components/List/OrderModal';
import {strings} from '../../Constants/localization';
import {order} from '../../dataManagment/srvConn';
import {clearAll} from '../../redux/reducers/products-reducer';
import {calculateCost, toCurrency} from '../../utils/helpers';

function totalCost(products) {
  let result = 0;
  if (products.length)
    products.forEach((el) => {
      result += el.ЦенаСоСкидкой * el.amount;
    });
  return result && toCurrency(result);
}

export default function List({navigation}) {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.productsState);
  const {user} = useSelector((state) => state.userState);
  //

  const [loading, setLoading] = useState(false);
  const [errortext, setErrorText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  //
  const [adress, setAdress] = useState('');
  const [marked, setMarked] = useState({});
  const [comment, setComment] = useState('');
  const [plastik, setPlastik] = useState(false);

  function makeOrder() {
    if (!adress) {
      setModalVisible(false);
      setErrorText(
        strings.getLanguage() === 'ru' ? 'напишите адресс' : 'Adressni yozing',
      );
      return;
    }

    const body = {
      Adress: adress,
      uidclient: user.uid,
      plastik,
      comment,
      Products: products,
      latitude: marked.latitude ? marked.latitude : '',
      longitude: marked.longitude ? marked.longitude : '',
    };

    setLoading(true);
    order(body)
      .then((res) => {
        if (res) {
          navigation.navigate('Success');
          dispatch(clearAll());
        } else {
          setErrorText('произошла ошибка');
        }
      })
      .finally(() => {
        setLoading(false);
        setModalVisible(false);
        setMarked({});
        setAdress('');
        setComment('');
      });
  }

  return (
    <>
      <OrderModal
        adress={adress}
        setAdress={setAdress}
        comment={comment}
        setComment={setComment}
        setPlastik={setPlastik}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        makeOrder={makeOrder}
        loading={loading}
        marked={marked}
        setMarked={setMarked}
      />
      <Alert setShow={() => setErrorText('')} text={errortext} />

      <ImageBackground
        imageStyle={{resizeMode: 'cover'}}
        source={Background}
        style={styles.continer}>
        <ScrollView>
          <Header />
          <View style={styles.innerContainer}>
            {products.length ? (
              products.map((el, i) => <Block key={i} index={i} product={el} />)
            ) : (
              <Text
                style={{marginVertical: 50, fontSize: 20, textAlign: 'center'}}>
                {strings.LIST.EMPTY}
              </Text>
            )}

            <View style={styles.totalCost}>
              <Text style={styles.text}>{strings.LIST.TOTAL}:</Text>
              <Text style={styles.cost}>
                {totalCost(products)} {strings.SUMM}
              </Text>
            </View>

            <TouchableOpacity
              disabled={!products.length}
              style={styles.orderBtnWraper}
              onPress={() => {
                if (calculateCost(products) < 150000) {
                  setErrorText(
                    strings.getLanguage() == 'ru'
                      ? 'Минимальный заказ от 150000 сум'
                      : 'Minimal zakaz 150000 sum',
                  );
                  return;
                }
                setModalVisible(true);
              }}>
              <LinearGradient
                colors={['#FF9472', '#F2709C']}
                style={styles.orderBtn}>
                <Text style={styles.orderText}>{strings.LIST.SUBMIT}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingTop: 110,
    alignItems: 'center',
    marginBottom: 70,
  },
  totalCost: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  text: {
    color: '#38344E',
    fontSize: 14,
  },
  cost: {
    fontWeight: 'bold',
    color: '#2B2C47',
    fontSize: 18,
  },
  orderBtnWraper: {
    width: '90%',
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
  },
  orderText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
