import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { heightPercentageToDP  as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function App() {
  return (
    <ImageBackground 
      source={require("./assets/launch.jpg")}
      style={styles.background}
    >
      <View 
        style={styles.container}
      >
        <Text 
          style={styles.text}
        >
          Do it :D
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    zIndex: -1
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: hp('8%')
  }
});
