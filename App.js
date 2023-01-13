
import React, { useState, useEffect } from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  SafeAreaProvider,

} from 'react-native-safe-area-context';
import Navigation from './src/router/Tab';
import { PortalProvider } from '@gorhom/portal';
import store from './src/store';

import { Provider } from 'react-redux';
import { StatusBar, View } from 'react-native';
function App() {

  return (
    <Provider store={store}>
      <StatusBar
        hidden={true}
      />
      <SafeAreaProvider>
        <PortalProvider>
          <Navigation />
        </PortalProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
