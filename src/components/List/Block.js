import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {useDispatch} from 'react-redux';
import {Divider} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {toCurrency} from '../../utils/helpers';
import Photo from './Photo';
import {
  incrementProduct,
  decrementProduct,
  removeProduct,
} from '../../redux/reducers/products-reducer';
import {strings} from '../../Constants/localization';

export default function Block({product, index}) {
  const dispatch = useDispatch();

  return (
    <View style={styles.block}>
      <View style={styles.blockImage}>
        <Photo id={product.ИД} />
      </View>

      <View style={styles.blockBody}>
        <Text style={styles.blockTitle}>{product.Номенклатура}</Text>

        <View style={styles.productType}>
          <View style={styles.typeWraper}>
            <Text style={styles.select}>{strings.COLOR}:</Text>
            <Text style={styles.type}>{product.Цвет}</Text>
          </View>
          <View style={styles.typeWraper}>
            <Text style={styles.select}>{strings.SIZE}:</Text>
            <Text style={styles.type}>{product.Размер}</Text>
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

        <View style={styles.amount}>
          <TouchableWithoutFeedback
            onPress={() => {
              if (product.amount == 1) dispatch(removeProduct(index));
              else dispatch(decrementProduct(index));
            }}>
            <View style={styles.amountBtn}>
              <MaterialCommunityIcons name="minus" size={25} color="#9B9B9B" />
            </View>
          </TouchableWithoutFeedback>

          <Text style={styles.amountNumber}>{product.amount}</Text>

          <TouchableWithoutFeedback
            onPress={() => {
              if (product.Количество <= product.amount) return;
              dispatch(incrementProduct(index));
            }}>
            <View style={styles.amountBtn}>
              <MaterialCommunityIcons name="plus" size={25} color="#9B9B9B" />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <Divider style={{marginTop: 10, width: '90%'}} />

        <Text style={styles.cost}>
          {toCurrency(product.ЦенаСоСкидкой * product.amount)} {strings.SUMM}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    overflow: 'hidden',
    width: '90%',
    height: 200,
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
    height: '100%',
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
    marginVertical: 7,
  },
  typeWraper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  select: {
    color: '#9B9B9B',
    fontSize: 12,
    fontWeight: '400',
  },
  type: {
    marginLeft: 3,
    color: '#242424',
    fontSize: 12,
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountBtn: {
    width: 36,
    height: 36,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  amountNumber: {color: '#222222', fontSize: 14, marginHorizontal: 18},
  cost: {color: '#FF5C7B', fontSize: 15},
});
