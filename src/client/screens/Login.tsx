import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LoginNavbar from "../components/navbar/LoginNavbar";
import { colors } from "../colors";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Icon from "react-native-vector-icons/Entypo";
import { useState } from "react";
import Input from "../components/Input";
import { horizontalScale, moderateScale, verticalScale } from "../scales";
import { StackProps } from "../types";

const Login: React.FC<StackProps> = ({ navigation }) => {
  const [lockIcon, setLockIcon] = useState(true);
  const [secureText, setSecureText] = useState(true);
  const [password, setPassword] = useState("");
  const isValid = password.trim().length === 0;

  const showPass = () => {
    setSecureText(!secureText);
    setLockIcon(!lockIcon);
  };

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <LoginNavbar navigation={navigation} />
      <View style={styles.heading}>
        <Heading text="Enter your password" />
      </View>
      <View style={styles.container}>
        <Input
          placeholder="Password"
          autoFocus
          secureTextEntry={secureText}
          onChangeText={setPassword}
        />
        <Pressable onPress={showPass}>
          <Icon
            style={styles.icon}
            name={lockIcon ? "lock" : "lock-open"}
            size={25}
          />
        </Pressable>
        <Button
          label="Login"
          disabled={isValid}
          onPress={() => navigation.navigate("Tabs")}
          outline
        />
        <View style={styles.forgot}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: colors.primary_green }}>
              Forgot Password?
            </Text>
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
  forgot: {},
  heading: {
    width: horizontalScale(350),
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(27),
  },
  icon: {
    position: "absolute",
    right: 5,
    top: verticalScale(-46),
  },
});

export default Login;
