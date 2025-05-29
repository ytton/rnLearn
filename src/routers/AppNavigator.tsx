import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { RootLayout } from '~/layouts/RootLayout';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootLayout>
        <TabNavigator />
      </RootLayout>
    </NavigationContainer>
  );
}
