import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { SplashProps } from './Splash';
import SignUpNav from '../components/navbar/Navbar';
import Heading from '../components/Heading';
import Input from '../components/Input';
import { moderateScale, horizontalScale, verticalScale } from '../scales';
import Button from '../components/Button';
import { useState } from 'react';
import Subheading from '../components/Subheading';
import Icon from 'react-native-vector-icons/Entypo';

const PassSignUp: React.FC<SplashProps> = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [lockIcon, setLockIcon] = useState(true);
  const isValid = password.trim().length === 0;

  const showPass = () => {
    setSecureText(!secureText);
    setLockIcon(!lockIcon);
  };

  return (
    <SafeAreaView>
      <SignUpNav navigation={navigation} pages={2} />
      <View style={styles.heading_container}>
        <Heading text="Enter your password" />
        <Subheading text="You will use this email and password to log into your FitMate account." />
        <Input
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry={secureText}
        />
        <Pressable onPress={showPass}>
          <Icon
            style={styles.icon}
            name={lockIcon ? 'lock' : 'lock-open'}
            size={25}
          />
        </Pressable>
      </View>
      <View style={styles.button_container}>
        <Button disabled={isValid} label="Login" onPress={() => {}} outline />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading_container: {
    margin: moderateScale(25),
    width: horizontalScale(350),
    gap: verticalScale(15)
  },
  icon: {
    position: 'absolute',
    right: 5,
    top: verticalScale(-46)
  },
  button_container: {
    width: horizontalScale(350),
    left: horizontalScale(25)
  }
});
export default PassSignUp;
