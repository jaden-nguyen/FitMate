import { StyleSheet, Text, View, Image } from 'react-native';
import { heightPercentageToDP  as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Button from '../components/Button';

const Splash = () => {
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
            style={styles.headingFit}
          >
            FIT
          </Text>
          <Text 
            style={styles.headingMate}
          >
            MATE
          </Text>
        </View>
        <Text 
          style={styles.subheading}
        >
         ------- Your Personal Fitness Companion -------
        </Text>

        <View
          style={styles.buttonContainer}
        >
          <Button label='Get started' outline />
          <Button label='Log in' />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: hp('9%')
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
    headingFit: {
      fontSize: hp('8%'),
      fontWeight: '600',
      color: '#8BC53F'
    },
    headingMate: {
      fontSize: hp('8%'),
      fontWeight: '600',
      color: '#63CF66'
    },
    subheading: {
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: hp('1.5%'),
      color: '#8BC53F'
    },
    image: {
      width: hp('15%'),
      height: hp('15%'),
      resizeMode: 'contain',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      flex: 1,
      gap: hp('1.5%'),
      paddingTop: hp('45%'),
      width: wp('66%')
    }
  });

export default Splash;