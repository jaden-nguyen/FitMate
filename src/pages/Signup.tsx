import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Square from 'react-native-vector-icons/FontAwesome';
import { SplashProps } from './Splash';
import { horizontalScale, moderateScale, verticalScale } from '../scales';
import * as Font from 'expo-font';
import Button from '../components/Button';
import AppLoading from 'expo-app-loading';
import Input from '../components/Input';
import { useState } from 'react';
import { colors } from '../colors';
import SignUpNav from '../components/navbar/Navbar';

const SignUp: React.FC<SplashProps> = ({ navigation }) => {
  const loadFonts = async () => {
    await Font.loadAsync({
      'AvenirNext-Regular': require('../../assets/fonts/AvenirNextLTPro-Regular.otf')
    });
  };

  if (!loadFonts) {
    return <AppLoading />;
  }
  const [email, setEmail] = useState('');
  const isEmailValid = email.trim().length === 0;

  return (
    <SafeAreaView>
      <SignUpNav navigation={navigation} pages={1} />
      <View style={styles.heading_container}>
        <Text style={styles.heading}>First off, enter your email</Text>
        <Input setEmail={setEmail} />
      </View>
      <View style={styles.button_container}>
        <Text style={styles.terms}>
          These terms and conditions ("Terms") govern your use of the FitMate
          mobile application ("App") provided by the Company. By using the App,
          you agree to be bound by these Terms. If you do not agree with any
          part of these Terms, you must not use the App. Privacy a. The Company
          respects your privacy and handles your personal information in
          accordance with its Privacy Policy. b. By using the App, you consent
          to the collection, use, and storage of your personal information as
          outlined in the Privacy Policy.
        </Text>
        <Button
          label="Agree & continue"
          outline
          onPress={() => navigation.navigate('PassSignUp')}
          disabled={isEmailValid}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading_container: {
    margin: moderateScale(25),
    width: horizontalScale(350),
    gap: verticalScale(10)
  },
  heading: {
    fontFamily: 'AvenirNext-Regular',
    fontWeight: '600',
    fontSize: moderateScale(35),
    marginBottom: verticalScale(20)
  },
  button_container: {
    flex: 1,
    gap: verticalScale(10),
    width: horizontalScale(350),
    left: horizontalScale(25),
    marginTop: verticalScale(10),
    padding: moderateScale(10),
    backgroundColor: colors.gray,
    borderRadius: moderateScale(5)
  },
  terms: {
    fontSize: moderateScale(10),
    color: 'black',
    opacity: 0.7
  }
});

export default SignUp;
