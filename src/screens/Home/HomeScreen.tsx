// src/screens/Home/HomeScreen.tsx
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import type {HomeScreenProps} from '~/types/router';
import CateScreen from './CateScreen';
const Tab = createMaterialTopTabNavigator();
const mockData = [
  {id: '1', title: '文章标题 1', description: '这是文章 1 的描述'},
  {id: '2', title: '文章标题 2', description: '这是文章 2 的描述'},
  {id: '3', title: '文章标题 3', description: '这是文章 3 的描述'},
];

export default function HomeScreen({navigation}: HomeScreenProps) {
  const handleItemPress = (item: (typeof mockData)[0]) => {
    navigation.navigate('HomeDetail', {
      id: item.id,
      title: item.title,
    });
  };

  const renderItem = ({item}: {item: (typeof mockData)[0]}) => (
    <TouchableOpacity style={styles.item} onPress={() => handleItemPress(item)}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        // 去除点击涟漪效果
        tabBarPressColor: 'transparent', // Android 涟漪颜色设为透明
        tabBarPressOpacity: 1, // iOS 按压透明度设为1（无变化）

        // Tab标签样式
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '600',
          textTransform: 'none', // 取消大写转换
        },

        // Tab项样式
        tabBarItemStyle: {
          width: 'auto', // 自动宽度
          paddingInline: 10,
        },

        // Tab栏整体样式
        tabBarStyle: {
          backgroundColor: '#ffffff',
          elevation: 0, // Android 去除阴影
          shadowOpacity: 0, // iOS 去除阴影
          borderBottomWidth: 1,
          borderBottomColor: '#e0e0e0',
        },

        // 指示器样式（下方蓝条）
        tabBarIndicatorStyle: {
          backgroundColor: '#ff6b6b', // 修改颜色
          height: 5, // 修改高度
          borderRadius: 2, // 圆角
        },

        // 激活状态文字颜色
        tabBarActiveTintColor: '#ff6b6b',
        // 未激活状态文字颜色
        tabBarInactiveTintColor: '#666666',
      }}>
      <Tab.Screen
        name="Home"
        options={{tabBarLabel: '首页'}}
        component={CateScreen}
      />
      <Tab.Screen
        name="Home2"
        options={{tabBarLabel: '首页'}}
        component={CateScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  list: {
    padding: 16,
  },
  item: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
