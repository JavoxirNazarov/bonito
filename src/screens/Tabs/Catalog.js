import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import SearchIcon from '../../assets/SearchIcon';
import Category from '../../components/Catalog/Category';
import Header from '../../components/Catalog/Header';
import ProductList from '../../components/Catalog/ProductList';
import {strings} from '../../Constants/localization';
import {handleError, makeGetRequest} from '../../dataManagment/srvConn';
import {randomColor} from '../../utils/helpers';

export default function Catalog({navigation}) {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [fetchingProducts, setFetChingProducts] = useState(false);
  const [fetchingCategory, setFetchingCategory] = useState(false);

  useEffect(() => {
    setFetchingCategory(true);
    makeGetRequest('getcategories')
      .then((res) => {
        setCategories(res);
        fetchProducts('new');
      })
      .catch(handleError)
      .finally(() => setFetchingCategory(false));
  }, []);

  const filtered = useMemo(() => {
    const searchBy = products.filter((el) =>
      el.Наименование.toLowerCase().includes(search.toLowerCase()),
    );
    return searchBy.length ? searchBy : products;
  }, [search, products]);

  function fetchProducts(id) {
    setSearch('');
    setFetChingProducts(true);
    if (id === 'new') {
      makeGetRequest(`topsales`)
        .then((res) => {
          const withBackground = res.map((el) => ({
            ...el,
            bgc: randomColor(),
          }));
          setProducts(withBackground);
        })
        .catch(handleError)
        .finally(() => setFetChingProducts(false));
    } else {
      makeGetRequest(`getproducts/${id}`)
        .then((res) => {
          const withBackground = res.map((el) => ({
            ...el,
            bgc: randomColor(),
          }));
          setProducts(withBackground);
        })
        .catch(handleError)
        .finally(() => setFetChingProducts(false));
    }
  }

  return (
    <View style={styles.contanier}>
      <Header />

      <LinearGradient
        colors={['#FF9472', '#F2709C']}
        style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          placeholder={strings.CATALOG.SEARCH}
          value={search}
        />
        <SearchIcon />
      </LinearGradient>

      <View style={styles.row}>
        <Category
          fetchingCategory={fetchingCategory}
          categories={categories}
          fetchProducts={fetchProducts}
        />

        <ProductList
          navigation={navigation}
          fetchingProducts={fetchingProducts}
          products={filtered}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    alignItems: 'center',
    paddingTop: heightPercentageToDP(12),
    paddingBottom: 55,
    position: 'relative',
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#FF957C',
    height: 45,
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 30,
    justifyContent: 'space-between',
    zIndex: 3,
  },
  input: {
    borderWidth: 2,
    borderColor: '#F2709C',
    height: 45,
    backgroundColor: '#fff',
    width: '85%',
    borderRadius: 50,
    paddingLeft: 15,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});
