import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../scales";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { colors } from "../../colors";
import { StackProps } from "../../types";

const LoginNavbar: React.FC<StackProps> = ({ navigation }) => {
  const loadFonts = async () => {
    await Font.loadAsync({
      "AvenirNext-Regular": require("../../../../assets/fonts/AvenirNextLTPro-Regular.otf"),
    });
  };

  if (!loadFonts) {
    return <AppLoading />;
  }
  return (
    <View style={styles.top}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Icon name="left" size={moderateScale(30)} />
      </TouchableOpacity>
      <View style={styles.title_container}>
        <Text style={[styles.heading, { color: colors.secondary_green }]}>
          FIT
        </Text>
        <Text style={[styles.heading, { color: colors.primary_green }]}>
          MATE
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    borderBottomWidth: 1,
    borderColor: "rgba(128, 128, 128, 0.5)",
    marginTop: verticalScale(25),
    flexDirection: "row",
    gap: horizontalScale(102),
  },
  title_container: {
    flexDirection: "row",
  },
  heading: {
    fontSize: moderateScale(30),
    fontWeight: "600",
    fontFamily: "AvenirNext-Regular",
  },
});
export default LoginNavbar;
