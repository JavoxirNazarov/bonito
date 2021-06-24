/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/reducers/rootReducer';
import {PersistGate} from 'redux-persist/integration/react';
import {LocalizationProvider} from './src/utils/LocalizationContext';

const app = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <LocalizationProvider>
        <App />
      </LocalizationProvider>
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => app);
