import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { horizontalScale, moderateScale, verticalScale } from '../scales';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../colors';
import { Divider } from '@rneui/themed';

export type TopNavigatorParamsList = {
  Splash: undefined;
  SignUp: undefined;
  PassSignUp: undefined;
};
export interface SplashProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, 'Splash'>;
  pages: 1 | 2;
}

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  const loadFonts = async () => {
    await Font.loadAsync({
      'AvenirNext-Regular': require('../../assets/fonts/AvenirNextLTPro-Regular.otf')
    });
  };

  if (!loadFonts) {
    return <AppLoading />;
  }
  return (
    <LinearGradient colors={['#2E2F2F', '#D1D6BA']} style={styles.container}>
      <Image source={require('../../assets/logo1.png')} style={styles.image} />
      <View style={styles.headingContainer}>
        <Text style={[styles.heading, { color: colors.secondary_green }]}>
          FIT
        </Text>
        <Text style={[styles.heading, { color: colors.primary_green }]}>
          MATE
        </Text>
      </View>
      <Text style={styles.subheading}>Your Personal Fitness Companion</Text>
      <View style={styles.buttonContainer}>
        <Button
          label="Get started"
          outline
          onPress={() => navigation.navigate('SignUp')}
        />
        <Divider width={0.5} color="gray" />
        <Button label="Log in" onPress={() => {}} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: verticalScale(65)
  },
  headingContainer: {
    textAlign: 'center',
    textAlignVertical: 'center',
    flexDirection: 'row'
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    zIndex: -1
  },
  heading: {
    fontSize: moderateScale(80),
    fontWeight: '600',
    fontFamily: 'AvenirNext-Regular'
  },
  subheading: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: moderateScale(17),
    color: colors.secondary_green,
    fontFamily: 'AvenirNext-Regular',
    fontWeight: '600'
  },
  image: {
    width: horizontalScale(150),
    height: verticalScale(150),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    gap: moderateScale(15),
    paddingTop: verticalScale(400),
    width: horizontalScale(380)
  }
});

export default Splash;
