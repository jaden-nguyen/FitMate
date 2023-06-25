import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../scales";
import { SplashProps } from "../../screens/Splash";
import Square from "react-native-vector-icons/FontAwesome";

const SignUpNav: React.FC<SplashProps> = ({ navigation, pages }) => {
  let square = pages === 2 ? "square" : "square-o";
  let squareSize = pages === 2 ? 28 : 30;

  return (
    <View style={styles.top}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Icon name="left" size={moderateScale(30)} />
      </TouchableOpacity>
      <View style={styles.squares}>
        <Square name="square" size={moderateScale(28)} />
        <Square name={square} size={moderateScale(squareSize)} />
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
  },
  squares: {
    flexDirection: "row",
    gap: horizontalScale(15),
    left: horizontalScale(135),
  },
});
export default SignUpNav;
