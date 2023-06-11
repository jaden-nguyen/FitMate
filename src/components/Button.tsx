import { Text, StyleSheet, TouchableHighlight } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { verticalScale } from "../scales";

interface buttonProps {
  label?: string;
  outline?: boolean;
  onPress: () => void;
}

const Button: React.FC<buttonProps> = ({
  label,
  outline,
  onPress
}) => {

  const styles = StyleSheet.create({
    button: {
      color: outline ? 'white' : 'rgb(99, 207, 102)',
      backgroundColor: outline ? 'rgb(99, 207, 102)' : 'white',
      textAlign: 'center',
      lineHeight: verticalScale(41),
      fontSize: verticalScale(20),
      height: verticalScale(45),
      borderRadius: hp('1.3%'),
      overflow: 'hidden'
    },
    container: {
      borderRadius: hp('1.3%')
    }
  });

  const handlePress = () => {
    onPress();
  }

  return (
   <TouchableHighlight 
     onPress={handlePress}
     underlayColor={'transparent'}
   >
     <Text style={styles.button}>{label}</Text>
   </TouchableHighlight>
  );
  
}


export default Button;