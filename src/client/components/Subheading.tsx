import AppLoading from "expo-app-loading";
import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { horizontalScale } from "../scales";
import { colors } from "../colors";

interface SubheadingProps {
  text: string;
  green?: boolean;
}

const Subheading = ({ text, green }: SubheadingProps) => {
  const loadFonts = async () => {
    await Font.loadAsync({
      "AvenirNext-Regular": require("../../../assets/fonts/AvenirNextLTPro-Regular.otf"),
    });
  };

  if (!loadFonts) {
    return <AppLoading />;
  }
  const styles = StyleSheet.create({
    heading: {
      fontFamily: "AvenirNext-Regular",
      fontSize: horizontalScale(21),
      color: green ? colors.primary_green : "black",
    },
  });

  return (
    <View>
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
};

export default Subheading;
