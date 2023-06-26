import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
interface TextProps {
  text: string;
  link?: boolean;
  bold?: boolean;
}

const SmallText = ({ text, link, bold }: TextProps) => {
  const loadFonts = async () => {
    await Font.loadAsync({
      "AvenirNext-Regular": require("../../../assets/fonts/AvenirNextLTPro-Regular.otf"),
    });
  };

  if (!loadFonts) {
    return <AppLoading />;
  }

  const styles = StyleSheet.create({
    text: {
      fontSize: 14,
      color: link ? "blue" : "black",
      fontWeight: bold ? "600" : "400",
    },
  });
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SmallText;
