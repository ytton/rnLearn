import React from 'react';
import {StatusBar} from 'react-native';
import './global.css';
import 'react-native-gesture-handler';
import AppNavigator from './routers/AppNavigator';

function App(): React.JSX.Element {
  
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <AppNavigator />
    </>
  );
}

export default App;
