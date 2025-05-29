import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import type { HomeDetailProps } from '~/types/router';
import { DESIGN_WIDTH } from '@env';
import { s } from 'react-native-size-matters/extend';
export default function CateScreen({ route, navigation }: any) {
  const goDetail = () => {
    navigation.navigate('HomeDetail', {
      id: 1,
      title: '这是标题',
    });
  };

  return (
    <ScrollView style={styles.container} >
      <View style={styles.content}>
        <Text onPress={goDetail}>{DESIGN_WIDTH}</Text>
      </View>
      <View className='bg-red-400 h-4' style={{ width: s(37.5) }}></View>
      <View className='bg-red-200 h-4 my-s-[37.5] w-s-[37.5]' ></View>

      <View className='w-[100%] bg-blue-400 h-4 mt-1'></View>
      <View className='w-[10%] bg-red-400 h-4 mt-1'></View>

      <View className='mt-vs-20 flex-row gap-vs-20'>

        <View className='w-s-10 h-s-10 bg-red-400'></View>
        <View className='w-s-10 h-s-10 bg-red-400'></View>
        <View className='w-s-10 h-s-10 bg-red-400'></View>
        <View className='w-s-10 h-s-10 bg-red-400'></View>
        <View className='w-s-10 h-s-10 bg-red-400'></View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  id: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});
