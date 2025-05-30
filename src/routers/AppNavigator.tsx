import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {RootLayout} from '~/layouts/RootLayout';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
export default function AppNavigator() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView className="flex-1">
        <NavigationContainer>
          <RootLayout>
            <TabNavigator />
          </RootLayout>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
