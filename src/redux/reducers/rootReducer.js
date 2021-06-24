import user from './user-reducer';
import products from './products-reducer';
import stocks from './stocks-reducer';
import balance from './balance-reducer';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import {combineReducers, createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

const reducer = combineReducers({
  userState: user,
  productsState: products,
  stocksState: stocks,
  balanceState: balance,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userState'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);
export {store, persistor};
