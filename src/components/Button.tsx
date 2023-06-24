import { Text, StyleSheet, TouchableHighlight } from "react-native";
import { moderateScale, verticalScale } from "../scales";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { colors } from "../colors";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string;
  outline?: boolean;
  disabled?: boolean;
  onPress: () => void;
}

const Button = ({ label, outline, onPress, disabled }: ButtonProps) => {
  const loadFonts = async () => {
    await Font.loadAsync({
      "AvenirNext-Regular": require("../../assets/fonts/AvenirNextLTPro-Regular.otf"),
    });
  };

  if (!loadFonts) {
    return <AppLoading />;
  }

  const styles = StyleSheet.create({
    button: {
      color: outline ? "white" : colors.primary_green,
      backgroundColor: outline ? colors.primary_green : "transparent",
      textAlign: "center",
      lineHeight: verticalScale(45),
      fontSize: verticalScale(20),
      height: verticalScale(45),
      borderRadius: moderateScale(13),
      overflow: "hidden",
      fontFamily: "AvenirNext-Regular",
      fontWeight: "600",
      opacity: disabled ? 0.6 : 1,
    },
  });

  const handlePress = () => {
    onPress();
  };

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={handlePress}
      underlayColor={"transparent"}
    >
      <Text style={styles.button}>{label}</Text>
    </TouchableHighlight>
  );
};

export default Button;
