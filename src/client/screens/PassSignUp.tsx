import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SignUpNav from "../components/navbar/Navbar";
import Heading from "../components/Heading";
import Input from "../components/Input";
import { moderateScale, horizontalScale, verticalScale } from "../scales";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import Subheading from "../components/Subheading";
import Icon from "react-native-vector-icons/Entypo";
import { StatusBar } from "expo-status-bar";
import { StackProps } from "../App";

const PassSignUp: React.FC<StackProps> = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [otherPass, setOtherPass] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [match, setMatch] = useState(false);
  const [lockIcon, setLockIcon] = useState(true);
  const [strength, setStrength] = useState("");
  const isValid =
    password.trim().length === 0 ||
    otherPass.trim().length === 0 ||
    !match;

  const showPass = () => {
    setSecureText(!secureText);
    setLockIcon(!lockIcon);
  };

  useEffect(() => {
    checkMatch();
  }, [otherPass]);

  const checkMatch = (): void => {
    if (otherPass === password) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  };

  const handlePassword = (text: string): void => {
    setPassword(text);

    if (!password) setStrength("");
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isPasswordValid = passwordRegex.test(password);
    if (isPasswordValid) {
      setStrength("strong");
    } else if (password.length >= 8) {
      setStrength("medium");
    } else {
      setStrength("poor");
    }
  };

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <SignUpNav navigation={navigation} pages={2} />
      <View
        style={[
          styles.heading_container,
          { marginTop: moderateScale(25) },
        ]}
      >
        <Heading text="Enter your password" />
        <Subheading text="You will use this email and password to log into your FitMate account." />
        <Input
          onChangeText={(text) => handlePassword(text)}
          secureTextEntry={secureText}
          autoFocus={true}
        />
        <Pressable onPress={showPass}>
          <Icon
            style={styles.icon}
            name={lockIcon ? "lock" : "lock-open"}
            size={25}
          />
        </Pressable>
      </View>
      <View style={styles.strength_container}>
        <Text style={styles.strength}>strength: </Text>
        <Text
          style={{
            position: "absolute",
            right: -60,
            bottom: 5,
            width: 60,
            color:
              strength === "strong"
                ? "green"
                : strength === "medium"
                ? "blue"
                : "red",
          }}
        >
          {strength}
        </Text>
      </View>
      <View style={styles.heading_container}>
        <Input onChangeText={setOtherPass} secureTextEntry={secureText} />
      </View>
      {!match && (
        <Text style={{ position: "relative", color: "red", left: 25 }}>
          Passwords do not match
        </Text>
      )}
      <View style={styles.button_container}>
        <Button
          disabled={isValid}
          label="Login"
          onPress={() => {}}
          outline
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading_container: {
    marginRight: moderateScale(25),
    marginLeft: moderateScale(25),
    width: horizontalScale(350),
    gap: verticalScale(12),
  },
  icon: {
    position: "absolute",
    right: 5,
    top: verticalScale(-46),
  },
  button_container: {
    marginTop: horizontalScale(30),
    width: horizontalScale(350),
    left: horizontalScale(25),
  },
  strength_container: {
    width: horizontalScale(320),
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: verticalScale(10),
  },
  strength: {
    position: "absolute",
    bottom: 5,
  },
});
export default PassSignUp;
