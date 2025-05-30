import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator, UserCenterStackNavigator} from './StackNavigators';
import type {TabParamList} from '~/types/router';
import {TouchableWithoutFeedback, View} from 'react-native';
import FontIcon from '~/components/FontIcon';
const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string;

          switch (route.name) {
            case 'HomeTab':
              iconName = focused ? 'home-fill' : 'home';
              break;
            case 'TimelineTab':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'RankTab':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'DiscoveryTab':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            case 'UserCenterTab':
              iconName = focused ? 'mine-fill' : 'mine';
              break;
          }
          return <FontIcon name={iconName as any} color={color} size={size} />;
        },
        tabBarPressColor: 'transparent',
        tabBarPressOpacity: 1,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          elevation: 0, // Android 去除阴影
          shadowOpacity: 0, // iOS 去除阴影
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#E5E5EA',
          paddingTop: 5,
          paddingBottom: 5,
          height: 60,
        },
        tabBarButton: props => (
          <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={props.style}>{props.children}</View>
          </TouchableWithoutFeedback>
        ),
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: '首页',
        }}
      />
      <Tab.Screen
        name="UserCenterTab"
        component={UserCenterStackNavigator}
        options={{
          tabBarLabel: '我的',
        }}
      />
      {/* <Tab.Screen
        name="SearchTab"
        component={SearchStackNavigator}
        options={{
          tabBarLabel: '搜索',
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackNavigator}
        options={{
          tabBarLabel: '个人',
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsStackNavigator}
        options={{
          tabBarLabel: '设置',
        }}
      /> */}
    </Tab.Navigator>
  );
}
