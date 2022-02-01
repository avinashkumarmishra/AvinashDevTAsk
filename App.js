import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { fonts } from './app/resources/Fonts';
import Routes from './app/navigation/Routes';
import {Provider} from 'react-redux';
import store from './app/redux/store';

export default function App() {
  let [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
