import { StyleSheet, Text, View, Image } from 'react-native';
import { heightPercentageToDP  as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Button from '../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { horizontalScale, moderateScale, verticalScale } from '../scales';

export type TopNavigatorParamsList = {
  Splash: undefined,
  SignUp: undefined
}
export interface SplashProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, 'Splash'>;
}

const Splash = ({ navigation }: SplashProps) => {

  return (
      <View 
        style={styles.container}
      >
        <Image
          source={require('../../assets/logo.png')}
          style={styles.image}
        />
        <View style={styles.headingContainer}>
          <Text 
            style={[styles.heading, { color: '#8BC53F'}]}
          >
            FIT
          </Text>
          <Text 
            style={[styles.heading, { color: '#63CF66'}]}
          >
            MATE
          </Text>
        </View>
        <Text 
          style={styles.subheading}
        >
          Your Personal Fitness Companion
        </Text>
        <View
          style={styles.buttonContainer}
        >
          <Button 
            label='Get started'
            outline
            onPress={() => navigation.navigate('SignUp')}
          />
          <Button 
            label='Log in'
            onPress={() => {}} 
          />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: verticalScale(65),
      backgroundColor: 'white'
    },
    headingContainer: {
      textAlign: 'center',
      textAlignVertical: 'center',
      flexDirection: 'row',
    },
    background: {
      flex: 1,
      resizeMode: "cover",
      zIndex: -1
    },
    heading: {
      fontSize: moderateScale(80),
      fontWeight: '600',
      color: '#8BC53F'
    },
    subheading: {
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: moderateScale(17),
      color: '#8BC53F'
    },
    image: {
      width: horizontalScale(150),
      height: verticalScale(150),
      resizeMode: 'contain',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      flex: 1,
      gap: moderateScale(15),
      paddingTop: verticalScale(400),
      width: horizontalScale(380)
    }
  });

export default Splash;