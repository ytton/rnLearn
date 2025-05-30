import React from 'react';
import './global.css';
import 'react-native-gesture-handler';
import AppNavigator from './routers/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
