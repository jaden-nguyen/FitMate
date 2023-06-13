import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import { SplashProps } from './Splash';
import { horizontalScale, moderateScale, verticalScale } from '../scales';
import { useFonts } from 'expo-font';
import Button from '../components/Button';
import AppLoading from 'expo-app-loading';
import Input from '../components/Input';
import { useState } from 'react';

const SignUp: React.FC<SplashProps> = ({ navigation }) => {
  const loadFonts = useFonts({
    'Proxima-Nova': require('../../assets/fonts/Proxima-Nova-Font.otf')
  });

  if (!loadFonts) {
    return <AppLoading />;
  }
  const [email, setEmail] = useState('');
  const isEmailValid = email.trim().length === 0;

  const handlePress = () => {
    console.log(email);
  };

  return (
    <SafeAreaView>
      <View style={styles.top}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="left" size={moderateScale(30)} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>First off, enter your email</Text>
        <Input setEmail={setEmail} />
      </View>
      <View style={styles.button}>
        <Button
          label="Agree & continue"
          outline
          onPress={handlePress}
          disabled={isEmailValid}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    borderBottomWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.5)',
    marginTop: verticalScale(25)
  },
  container: {
    margin: moderateScale(25)
  },
  heading: {
    fontFamily: 'Proxima-Nova',
    fontWeight: '600',
    fontSize: moderateScale(35),
    marginBottom: verticalScale(20)
  },
  button: {
    width: horizontalScale(380),
    left: horizontalScale(15),
    paddingLeft: 7.5,
    paddingRight: 5
  }
});

export default SignUp;
