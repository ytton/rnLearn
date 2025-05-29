import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import type {HomeDetailProps} from '~/types/router';

export default function CateScreen({route, navigation}: any) {
  const goDetail = () => {
    navigation.navigate('HomeDetail', {
      id: 1,
      title: '这是标题',
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text onPress={goDetail}>cate111111111111 1 1 1 1 1</Text>
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
