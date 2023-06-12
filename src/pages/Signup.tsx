import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import { SplashProps } from './Splash';
import { moderateScale, verticalScale } from '../scales';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import Button from '../components/Button';

const SignUp: React.FC<SplashProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const loadFonts = async () => {
    await Font.loadAsync({
      'Proxima-Nova': require('../../assets/fonts/Proxima-Nova-Font.otf')
    });
  };

  useEffect(() => {
    loadFonts();
  }, []);

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
        <Text style={styles.heading}>First off, enter your email address</Text>
        <View style={styles.input}>
          <TextInput
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor={'rgba(206,207,201,255)'}
          />
        </View>
      </View>
      <Button label="Agree & continue" outline onPress={handlePress} />
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
    fontSize: moderateScale(35)
  },
  input: {
    borderColor: 'rgba(206,207,201,255)',
    borderWidth: 1,
    color: 'rgba(206,207,201,255)'
  }
});

export default SignUp;
