import { Text, StyleSheet, TouchableHighlight } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface buttonProps {
  label?: string;
  outline?: boolean;
}

const Button: React.FC<buttonProps> = ({
  label,
  outline
}) => {

  const styles = StyleSheet.create({
    button: {
      color: outline ? '#FFFFFF' : '#63CF66',
      backgroundColor: outline ? '#63CF66' : '',
      borderRadius: hp('1.5%'),
      textAlign: 'center',
      height: hp('5%'),
      fontSize: hp('2%'),
    }
  });

  return (
   <TouchableHighlight>
     <Text style={styles.button}>{label}</Text>
   </TouchableHighlight>
  );
  
}


export default Button;