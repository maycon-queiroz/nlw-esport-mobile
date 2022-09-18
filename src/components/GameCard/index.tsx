import {
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
  Text
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: number
  }
  bannerUrl: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps
}

export function GameCard({ data, ...res }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        style={styles.cover}
        source={{ uri: data.bannerUrl }}
        {...res}
      >

        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >

          <Text style={styles.name}>
            {data.title}
          </Text>

          <Text style={styles.ads}>
            {data._count.ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground >
    </TouchableOpacity>
  );
}