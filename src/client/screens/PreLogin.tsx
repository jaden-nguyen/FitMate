import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import LoginNavbar from "../components/navbar/LoginNavbar";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";
import { colors } from "../colors";
import { useState } from "react";
import { horizontalScale, moderateScale, verticalScale } from "../scales";
import { StackProps } from "../types";

const PreLogin: React.FC<StackProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const isValid = email.trim().length === 0;

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <LoginNavbar navigation={navigation} />
      <View style={styles.heading}>
        <Heading text="Log in with your email" />
      </View>
      <View style={styles.container}>
        <Input
          placeholder="Email"
          autoFocus
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        <Button
          label="Continue"
          onPress={() => navigation.navigate("Login")}
          outline
          disabled={isValid}
        />
        <View style={styles.register}>
          <Text>New to FitMate?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: colors.primary_green }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: moderateScale(25),
    width: horizontalScale(350),
    gap: verticalScale(15),
  },
  heading: {
    width: horizontalScale(350),
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(27),
  },
  register: {
    display: "flex",
    flexDirection: "row",
    gap: horizontalScale(5),
  },
});

export default PreLogin;
