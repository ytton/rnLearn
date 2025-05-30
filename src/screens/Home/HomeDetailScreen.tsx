import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import type {HomeDetailProps} from '~/types/router';

export default function HomeDetailScreen({route}: HomeDetailProps) {
  const {id, title} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.id}>ID: {id}</Text>
        <Text style={styles.description}>
          这里是 {title} 的详细内容。你可以在这里展示更多信息，
          比如文章内容、图片、视频等等。这个页面是通过导航参数 传递数据的示例。
        </Text>
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
