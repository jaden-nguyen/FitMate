import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { verticalScale } from '../scales';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

interface buttonProps {
  label?: string;
  outline?: boolean;
  disabled?: boolean;
  onPress: () => void;
}

const Button: React.FC<buttonProps> = ({
  label,
  outline,
  onPress,
  disabled
}) => {
  const loadFonts = useFonts({
    'Proxima-Nova': require('../../assets/fonts/Proxima-Nova-Font.otf')
  });

  if (!loadFonts) {
    return <AppLoading />;
  }

  const styles = StyleSheet.create({
    button: {
      color: outline ? 'white' : 'rgb(99, 207, 102)',
      backgroundColor: outline ? 'rgb(99, 207, 102)' : '',
      textAlign: 'center',
      lineHeight: verticalScale(45),
      fontSize: verticalScale(20),
      height: verticalScale(45),
      borderRadius: hp('1.3%'),
      overflow: 'hidden',
      fontFamily: 'Proxima-Nova',
      fontWeight: '600',
      opacity: disabled ? 0.6 : 1
    },
    container: {
      borderRadius: hp('1.3%')
    }
  });

  const handlePress = () => {
    onPress();
  };

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={handlePress}
      underlayColor={'transparent'}
    >
      <Text style={styles.button}>{label}</Text>
    </TouchableHighlight>
  );
};

export default Button;
