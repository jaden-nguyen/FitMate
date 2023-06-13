import { StyleSheet, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

interface InputProps {
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({ setEmail }) => {
  const loadFonts = useFonts({
    'Proxima-Nova': require('../../assets/fonts/Proxima-Nova-Font.otf')
  });

  if (!loadFonts) {
    return <AppLoading />;
  }
  return (
    <TextInput
      onChangeText={setEmail}
      placeholder="Email address"
      placeholderTextColor={'rgba(206,207,201,255)'}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: 'rgba(206,207,201,255)',
    color: 'rgba(206,207,201,255)',
    fontFamily: 'Proxima-Nova'
  }
});
export default Input;
