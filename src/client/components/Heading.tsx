import AppLoading from "expo-app-loading";
import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { horizontalScale } from "../scales";

const Heading = ({ text }: { text: string }) => {
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
      fontWeight: "500",
      fontSize: horizontalScale(30),
    },
  });

  return (
    <View>
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
};

export default Heading;
