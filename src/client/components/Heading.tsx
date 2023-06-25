import AppLoading from "expo-app-loading";
import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { horizontalScale } from "../scales";

const Heading = ({ text }: { text: string }) => {
  const loadFonts = async () => {
    await Font.loadAsync({
      "AvenirNext-Regular": require("../../assets/fonts/AvenirNextLTPro-Regular.otf"),
    });
  };

  if (!loadFonts) {
    return <AppLoading />;
  }
  return (
    <View>
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: "AvenirNext-Regular",
    fontWeight: "600",
    fontSize: horizontalScale(25),
  },
});
export default Heading;
