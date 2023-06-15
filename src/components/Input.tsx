import { StyleSheet, TextInput, KeyboardTypeOptions } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { colors } from '../colors';

interface InputProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({
  onChangeText,
  keyboardType,
  placeholder,
  secureTextEntry
}) => {
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
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.gray}
      style={styles.input}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
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
