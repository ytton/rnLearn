import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CateScreen from '~/screens/Home/CateScreen';
import HomeScreen from '~/screens/Home/HomeScreen';

const Tab = createMaterialTopTabNavigator();

export default function HomeTopTabsNavigator() {
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
        component={HomeScreen}
      />
      <Tab.Screen
        name="Home2"
        options={{tabBarLabel: '日番'}}
        initialParams={{type: 'daily'}}
        component={CateScreen}
      />
    </Tab.Navigator>
  );
}
