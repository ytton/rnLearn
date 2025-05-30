import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type {StackScreenProps} from '@react-navigation/stack';

// 每个Tab的堆叠导航参数
export type HomeStackParamList = {
  HomeScreen: undefined;
  HomeDetail: {id: string; title: string};
};

export type UserCenterStackParamList = {
  UserCenterScreen: undefined;
  // HomeDetail: {id: string; title: string};
};

// 底部Tab导航参数
export type TabParamList = {
  HomeTab: undefined;
  TimelineTab: undefined;
  RankTab: undefined;
  DiscoveryTab: undefined;
  UserCenterTab: undefined;
};


// export type HomeScreenProps = StackScreenProps<
//   HomeStackParamList,
//   'HomeScreen'
// >;

export type HomeDetailProps = StackScreenProps<
  HomeStackParamList,
  'HomeDetail'
>;

// export type UserCenterScreenProps = StackScreenProps<
//   UserCenterStackParamList,
//   'UserCenterScreen'
// >;
export type UserCenterScreenProps = BottomTabScreenProps<
  UserCenterStackParamList,
  'UserCenterScreen'
>;
