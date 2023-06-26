import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../scales";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { colors } from "../../colors";

const DashboardNav = () => {
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
      <TouchableOpacity onPress={() => {}}>
        <Icon name="menu" size={moderateScale(30)} color="black" />
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
    left: 10,
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
export default DashboardNav;
