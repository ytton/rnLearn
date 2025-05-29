import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator, UserCenterStackNavigator} from './StackNavigators';
import type {TabParamList} from '~/types/router';
import {Home} from '~/lib/icons/Home';
import {TouchableWithoutFeedback, View} from 'react-native';
const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          // let iconName: string;

          // switch (route.name) {
          //   case 'HomeTab':
          //     iconName = focused ? 'home' : 'home-outline';
          //     break;
          //   case 'SearchTab':
          //     iconName = focused ? 'search' : 'search-outline';
          //     break;
          //   case 'ProfileTab':
          //     iconName = focused ? 'person' : 'person-outline';
          //     break;
          //   case 'SettingsTab':
          //     iconName = focused ? 'settings' : 'settings-outline';
          //     break;
          //   default:
          //     iconName = 'home-outline';
          // }

          return <Home className={focused ? 'text-red-500' : 'text-red-700'} />;
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
