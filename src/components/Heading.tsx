import AppLoading from 'expo-app-loading';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { heightPercentageToDP } from 'react-native-responsive-screen';

interface HeadingProps {
  text?: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  const loadFonts = async () => {
    await Font.loadAsync({
      'AvenirNext-Regular': require('../../assets/fonts/AvenirNextLTPro-Regular.otf')
    });
  };

  if (!loadFonts) {
    return <AppLoading />;
  }
  return (
    <View>
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'AvenirNext-Regular',
    fontWeight: '600',
    fontSize: heightPercentageToDP(3)
  }
});
export default Heading;
