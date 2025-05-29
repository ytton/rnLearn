import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '~/screens/Home/HomeScreen';
import HomeDetailScreen from '~/screens/Home/HomeDetailScreen';
import UserCenterScreen from '~/screens/UserCenter/UserCenterScreen';

import type {
  HomeStackParamList,
  UserCenterStackParamList,
} from '~/types/router';
import {Text, View} from 'react-native';
import {Avatar, AvatarImage} from '~/components/ui/avatar';

const HomeStack = createStackNavigator<HomeStackParamList>();
// const SearchStack = createStackNavigator<SearchStackParamList>();
const UserCenterStack = createStackNavigator<UserCenterStackParamList>();
// const SettingsStack = createStackNavigator<SettingsStackParamList>();

// 首页堆叠导航
export function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f8f9fa',
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: () => {
            return (
              <View className="flex-row pt-0 pb-4 px-4 bg-white items-center">
                <View className="flex">
                  <Avatar alt="Zach Nugent's Avatar">
                    <AvatarImage
                      source={{uri: 'https://github.com/mrzachnugent.png'}}
                    />
                  </Avatar>
                </View>
                <View className="ml-2 bg-gray-100 py-2 px-4 flex-1">
                  <Text className="text-gray-400">搜索</Text>
                </View>
                <View className="gap-2 flex-row ml-2">
                  <View>
                    <Text>搜</Text>
                  </View>
                  <View>
                    <Text>搜</Text>
                  </View>
                </View>
              </View>
            );
          },
        }}
      />
      <HomeStack.Screen
        name="HomeDetail"
        component={HomeDetailScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitle: '返回',
        })}
      />
    </HomeStack.Navigator>
  );
}

// 搜索堆叠导航
// export function SearchStackNavigator() {
//   return (
//     <SearchStack.Navigator>
//       <SearchStack.Screen
//         name="SearchScreen"
//         component={SearchScreen}
//         options={{ title: '搜索' }}
//       />
//       <SearchStack.Screen
//         name="SearchDetail"
//         component={SearchDetailScreen}
//         options={{ title: '搜索详情' }}
//       />
//     </SearchStack.Navigator>
//   );
// }

// // 个人中心堆叠导航
export function UserCenterStackNavigator() {
  return (
    <UserCenterStack.Navigator>
      <UserCenterStack.Screen
        name="UserCenterScreen"
        component={UserCenterScreen}
        options={{title: '个人资料'}}
      />
    </UserCenterStack.Navigator>
  );
}

// // 设置堆叠导航
// export function SettingsStackNavigator() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen
//         name="SettingsScreen"
//         component={SettingsScreen}
//         options={{ title: '设置' }}
//       />
//       <SettingsStack.Screen
//         name="SettingsDetail"
//         component={SettingsDetailScreen}
//         options={{ title: '设置详情' }}
//       />
//     </SettingsStack.Navigator>
//   );
// }
