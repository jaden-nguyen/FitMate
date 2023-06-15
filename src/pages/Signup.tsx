import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
  Platform,
  TouchableOpacity
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SplashProps } from './Splash';
import { horizontalScale, moderateScale, verticalScale } from '../scales';
import Button from '../components/Button';
import Input from '../components/Input';
import { useState } from 'react';
import { colors } from '../colors';
import SignUpNav from '../components/navbar/Navbar';
import Heading from '../components/Heading';
import DateTimePicker from '@react-native-community/datetimepicker';

const SignUp: React.FC<SplashProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }: any, selectedDate: any) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);
    } else {
      toggleDatePicker();
    }
  };

  const confirmDate = () => {
    setDateOfBirth(date.toDateString());
    toggleDatePicker();
  };
  const isNameValid = name.trim().length === 0;
  const isEmailValid = email.trim().length === 0;
  const isValid = isNameValid || isEmailValid;

  return (
    <SafeAreaView>
      <SignUpNav navigation={navigation} pages={1} />
      <View style={styles.heading_container}>
        <Heading text="Create your account" />
        <Input
          placeholder="Name"
          onChangeText={setName}
          keyboardType="ascii-capable"
        />
        <Input
          placeholder="Email"
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {showPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={date}
            onChange={onChange}
          />
        )}
        {showPicker && Platform.OS === 'ios' && (
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <TouchableOpacity style={[]} onPress={toggleDatePicker}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[]} onPress={confirmDate}>
              <Text>Confirm</Text>
            </TouchableOpacity>
          </View>
        )}

        {!showPicker && (
          <Pressable onPress={toggleDatePicker}>
            <TextInput
              style={styles.input}
              placeholder="Date of birth"
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
              editable={false}
              onPressIn={toggleDatePicker}
            />
          </Pressable>
        )}
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
          onPress={() => {
            navigation.navigate('PassSignUp');
          }}
          disabled={isValid}
        />
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
  button_container: {
    flex: 1,
    gap: verticalScale(10),
    width: horizontalScale(350),
    left: horizontalScale(25),
    marginTop: verticalScale(10),
    padding: moderateScale(10),
    backgroundColor: colors.gray,
    borderRadius: hp('1.3%')
  },
  terms: {
    fontSize: moderateScale(10),
    color: 'black',
    opacity: 0.7
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: colors.gray,
    color: colors.gray,
    fontFamily: 'AvenirNext-Regular'
  }
});

export default SignUp;
