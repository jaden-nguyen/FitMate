import { StyleSheet, TextInput } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { colors } from '../colors';

interface InputProps {
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({ setEmail }) => {
  const loadFonts = async () => {
    await Font.loadAsync({
      'AvenirNext-Regular': require('../../assets/fonts/AvenirNextLTPro-Regular.otf')
    });
  };

  if (!loadFonts) {
    return <AppLoading />;
  }
  return (
    <TextInput
      onChangeText={setEmail}
      placeholder="Email address"
      placeholderTextColor={colors.gray}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: colors.gray,
    color: colors.gray,
    fontFamily: 'AvenirNext-Regular'
  }
});
export default Input;
