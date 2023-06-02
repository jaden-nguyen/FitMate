import { View, Text, StyleSheet } from "react-native";

const SignUp = () => {
  return (
    <View style={styles.container}>
        <Text>First off, enter your email address.</Text>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
})

export default SignUp;