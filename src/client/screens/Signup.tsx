import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../scales";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { colors } from "../colors";
import SignUpNav from "../components/navbar/Navbar";
import Heading from "../components/Heading";
import DateTimePicker from "@react-native-community/datetimepicker";
import Terms from "../components/Terms";
import { StatusBar } from "expo-status-bar";
import { StackProps } from "../types";

const SignUp: React.FC<StackProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }: any, selectedDate: any) => {
    if (type == "set") {
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
      <StatusBar style="light" />
      <SignUpNav navigation={navigation} pages={1} />
      <View style={styles.heading_container}>
        <Heading text="Create your account" />
        <Input
          placeholder="Name"
          onChangeText={setName}
          keyboardType="ascii-capable"
          autoFocus
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
        {showPicker && Platform.OS === "ios" && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
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
        <Terms />
        <Button
          label="Agree & continue"
          outline
          onPress={() => {
            navigation.navigate("PassSignUp");
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
    gap: verticalScale(15),
  },
  button_container: {
    flex: 1,
    gap: verticalScale(10),
    width: horizontalScale(350),
    left: horizontalScale(25),
    marginTop: verticalScale(10),
    padding: moderateScale(10),
    backgroundColor: colors.gray,
    borderRadius: moderateScale(13),
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: colors.gray,
    color: colors.gray,
    fontFamily: "AvenirNext-Regular",
  },
});

export default SignUp;
