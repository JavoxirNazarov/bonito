import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Divider} from 'react-native-elements';
import Background from '../../assets/Basket/Background.png';
import Header from '../../components/Header';
import Photo from '../../components/List/Photo';
import {strings} from '../../Constants/localization';
import {handleError, makeGetRequest} from '../../dataManagment/srvConn';
import {toCurrency} from '../../utils/helpers';

function totalCost(products) {
  let result = 0;
  if (products.length)
    products.forEach((el) => {
      result += el.Сумма;
    });
  return result && toCurrency(result);
}

export default function HistoryProduct({navigation, route}) {
  const {id} = route.params;
  const [products, setProducts] = useState([]);
  //

  useEffect(() => {
    makeGetRequest(`infoorder/${id}`)
      .then((res) => setProducts(res))
      .catch(handleError);
  }, [id]);

  return (
    <>
      <ImageBackground
        imageStyle={{resizeMode: 'cover'}}
        source={Background}
        style={styles.continer}>
        <ScrollView>
          <Header title={strings.HISTORY.HEADER} navigation={navigation} />
          <View style={styles.innerContainer}>
            {products.length ? (
              <>
                {products.map((product, i) => (
                  <View key={i} style={styles.block}>
                    <View style={styles.blockImage}>
                      <Photo id={product.Код} />
                    </View>

                    <View style={styles.blockBody}>
                      <Text style={styles.blockTitle}>
                        {product.Номенклатура}
                      </Text>

                      <View style={styles.productType}>
                        <View style={styles.typeWraper}>
                          <Text style={styles.select}>{strings.COLOR}:</Text>
                          <Text style={styles.type}>{product.Цвет}</Text>
                        </View>
                        <View style={styles.typeWraper}>
                          <Text style={styles.select}>{strings.SIZE}:</Text>
                          <Text style={styles.type}>{product.Размер}</Text>
                        </View>
                        <View style={styles.typeWraper}>
                          <Text style={styles.select}>{strings.AMOUNT}:</Text>
                          <Text style={styles.type}>
                            {product.Количество} Шт
                          </Text>
                        </View>
                        {product.Скидка ? (
                          <View style={styles.typeWraper}>
                            <Text style={styles.select}>{strings.SALE}:</Text>
                            <Text style={styles.type}>
                              {product.Скидка}
                              {' %'}
                            </Text>
                          </View>
                        ) : null}
                      </View>

                      <Divider style={{width: '90%'}} />

                      <Text style={styles.cost}>
                        {toCurrency(product.Сумма)} {strings.SUMM}
                      </Text>
                    </View>
                  </View>
                ))}
                <View style={styles.totalCost}>
                  <Text style={styles.text}>{strings.LIST.TOTAL}:</Text>
                  <Text style={styles.cost}>
                    {totalCost(products)} {strings.SUMM}
                  </Text>
                </View>
              </>
            ) : (
              <ActivityIndicator
                style={{marginTop: 50}}
                size="large"
                color="blue"
              />
            )}
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
  block: {
    overflow: 'hidden',
    width: '90%',
    minHeight: 186,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 2,
    flexDirection: 'row',
    marginVertical: 10,
  },
  blockImage: {
    width: '37%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockBody: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  blockTitle: {
    color: '#3E3A5A',
    fontSize: 14,
    fontWeight: 'bold',
  },
  productType: {
    marginVertical: 15,
  },
  typeWraper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  select: {
    color: '#9B9B9B',
    fontSize: 14,
    fontWeight: '400',
    marginRight: 5,
  },
  type: {
    color: '#242424',
    fontSize: 14,
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  amountNumber: {color: '#222222', fontSize: 14, marginHorizontal: 18},
  cost: {color: '#FF5C7B', fontSize: 15},
});
