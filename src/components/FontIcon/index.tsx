import {createIconSet} from 'react-native-vector-icons';
import {iconConfig, IconName} from './type';

// 创建自定义图标集
const Icon = createIconSet(
  iconConfig.icons,
  iconConfig.fontFamily,
  'iconfont.ttf',
);

type FontIconProps = {
  name: IconName;
  size?: number;
  color?: string;
  onPress?: () => void;
};
const FontIcon: React.FC<FontIconProps> = ({
  name,
  size = 24,
  color = '#000',
  onPress,
}) => {
  return <Icon name={name} size={size} color={color} onPress={onPress} />;
};

export default FontIcon;
