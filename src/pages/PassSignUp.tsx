import { Text, SafeAreaView } from 'react-native';
import { SplashProps } from './Splash';
import SignUpNav from '../components/navbar/Navbar';

const PassSignUp: React.FC<SplashProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <SignUpNav navigation={navigation} pages={2} />
      <Text>Enter password</Text>
    </SafeAreaView>
  );
};

export default PassSignUp;
