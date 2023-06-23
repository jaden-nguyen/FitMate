import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateScale } from "../scales";

const Terms = () => {
  return (
    <View>
      <Text style={styles.terms}>
        These terms and conditions ("Terms") govern your use of the FitMate
        mobile application ("App") provided by the Company. By using the
        App, you agree to be bound by these Terms. If you do not agree with
        any part of these Terms, you must not use the App. Privacy a. The
        Company respects your privacy and handles your personal information
        in accordance with its Privacy Policy. b. By using the App, you
        consent to the collection, use, and storage of your personal
        information as outlined in the Privacy Policy.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  terms: {
    fontSize: moderateScale(10),
    color: "black",
    opacity: 0.7,
  },
});

export default Terms;
