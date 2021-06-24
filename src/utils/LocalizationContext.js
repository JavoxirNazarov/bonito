import React, {createContext, useEffect, useState} from 'react';
import {strings} from '../Constants/localization';
import AsyncStorage from '@react-native-community/async-storage';
import * as RNLocalize from 'react-native-localize';

const APP_LANGUAGE = 'appLanguage';

export const LocalizationContext = createContext({
  setAppLanguage: () => {},
  appLanguage: 'ru',
});

export const LocalizationProvider = ({children}) => {
  const [appLanguage, setAppLanguage] = useState('ru');

  useEffect(() => {
    initializeAppLanguage();
  }, []);

  const setLanguage = (language) => {
    strings.setLanguage(language);
    setAppLanguage(language);
    AsyncStorage.setItem(APP_LANGUAGE, language);
  };

  const initializeAppLanguage = async () => {
    const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);

    if (!currentLanguage) {
      let localeCode = 'ru';
      const supportedLocaleCodes = strings.getAvailableLanguages();
      const phoneLocaleCodes = RNLocalize.getLocales().map(
        (locale) => locale.languageCode,
      );
      phoneLocaleCodes.some((code) => {
        if (supportedLocaleCodes.includes(code)) {
          localeCode = code;
          return true;
        }
      });
      setLanguage(localeCode);
    } else {
      setLanguage(currentLanguage);
    }
  };

  return (
    <LocalizationContext.Provider
      value={{
        appLanguage,
        setAppLanguage: setLanguage,
      }}>
      {children}
    </LocalizationContext.Provider>
  );
};
